import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import type { TaskWithContent, Meta } from '@src/types/model';
import { createHash } from 'crypto';


const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PROJECT_ROOT = path.join(__dirname, '../..');
const PATHS = {
  tasks: path.join(PROJECT_ROOT, 'tasks'),
  output: path.join(PROJECT_ROOT, 'data/tasks.ts'),
  public: path.join(PROJECT_ROOT, 'public')
};


type Folder = {
  name: string;
  parent: Folder | null,
  fullpath: string;
  shortpath: string;
  isTask: boolean;
  subfolders: Folder[];
  meta?: (Meta | null)[];  // Мета каждой папки - это массив мет. В [0] - собственная мета, а дальше - меты родителей.
}


async function buildFoldersTree(rootDir: string): Promise<Folder> {
  const tasksBase = path.basename(rootDir);

  const rootCategory: Folder = {
    name: 'root',
    parent: null,
    fullpath: rootDir,
    shortpath: tasksBase,
    isTask: false,
    subfolders: []
  };

  async function scan(folder: Folder) {
    const folders = await fs.readdir(folder.fullpath);
    for (const curFolder of folders) {
      const fullpath = path.join(folder.fullpath, curFolder);
      const stat = await fs.stat(fullpath);
      if (stat.isDirectory()) {
        const childFolder: Folder = {
          name: curFolder,
          parent: folder,
          fullpath,
          shortpath: path.join(folder.shortpath, curFolder),
          isTask: false,
          subfolders: []
        };
        folder.subfolders.push(childFolder);
        if (curFolder.startsWith('task-')) {
          childFolder.isTask = true;
        } else {
          childFolder.isTask = false; 
          await scan(childFolder);
        }
      }
    }
  }
  
  await scan(rootCategory);
  return rootCategory;
}


async function fillFoldersMeta(folder: Folder, parentMetas: (Meta | null)[] = []): Promise<void> {
  const meta = await getMeta(path.join(folder.fullpath, 'meta.json'));
  const myMeta: (Meta | null)[] = [meta, ...parentMetas];
  folder.meta = myMeta;
  if (!folder.isTask) {
    for (const subfolder of folder.subfolders) {
      await fillFoldersMeta(subfolder, myMeta);
    }
  }
}


async function getMeta(metaPath: string): Promise<Meta | null> {
  try {
    const metaRaw = await fs.readFile(metaPath, 'utf8');
    const json = JSON.parse(metaRaw);
    return json;
  } catch {
    console.warn(`⚠️ Не найден meta-файл для задачи ${metaPath}.`);
    return null;
  }
}


function flattenFoldersTree(root: Folder): Folder[] {
  const directories: Folder[] = [];
  directories.push(root);
  root.subfolders.forEach(sub => directories.push(...flattenFoldersTree(sub)));
  return directories;
}


async function findFileWithExtensions(basePath, possibleExtensions) {
  for (let ext of possibleExtensions) {
    ext = ext.startsWith('.') ? ext : `.${ext}`;
    const filePath = basePath + ext;
    try {
      await fs.access(filePath);
      return [filePath, ext];
    } catch (err) {
      // Файл не существует, пробуем следующее расширение
    }
  }
  return [null, null]; // Ни один файл не найден
}


async function makeTask(folder: Folder): Promise<TaskWithContent> {
  const description = await mdToString(path.join(folder.fullpath, 'description.md'));

  console.log(`[${++makeTask.calls}] Обрабатываю директорию: ${folder.fullpath}`);

  const [templatePath, templateExt] = await findFileWithExtensions(path.join(folder.fullpath, 'template'), ['ts', 'js', 'html']);
  let template = '';
  if (templatePath !== null) {
    template = await sourceCodeToString(templatePath);
  }

  let solution = '';
  const [solutionPath, solutionExt] = await findFileWithExtensions(path.join(folder.fullpath, 'solution'), ['ts', 'js', 'html']);
  if (solutionPath !== null) {
    solution = await sourceCodeToString(solutionPath);
  }

  const categories = getCategoriesFromTaskDir(folder.fullpath);
  const title = folder.meta?.[0]?.title ?? '';
  const tagsAsSet = folder.meta?.reduce((tagsSet, meta) => {
    meta?.tags?.forEach(tag => tagsSet.add(tag));
    return tagsSet;
  }, new Set<string>());

  return {
    id: idFromPath(folder.fullpath),
    name: folder.name,
    path: folder.shortpath,
    title,
    description,
    template,
    solution,
    templateLang: templateExt || '',
    solutionLang: solutionExt || '',
    categories,
    tags: tagsAsSet ? [...tagsAsSet] : []
  }
}

makeTask.calls = 0;


function getCategoriesFromTaskDir(taskDir: string) {
  const base = path.dirname(path.relative(PATHS.tasks, taskDir));
  const normalized = path.normalize(base);
  return normalized.split(path.sep);
}


async function mdToString(mdPath: string) {
  try {
    const description = await fs.readFile(mdPath, 'utf8');
    return description;
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code !== 'ENOENT') {
      console.warn(`⚠️ Не удалось спарсить markdown из файла '${mdPath}': ` + error.message);
    }
  }
  return '';
}


async function sourceCodeToString(scPath: string) {
  try {
    const tstext = await fs.readFile(scPath, 'utf-8');
    return tstext.replace(/\$\{/g, '\\${');
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code !== 'ENOENT') {
      console.warn(`⚠️ Не удалось спарсить source code из файла '${scPath}': ` + error.message);
    }
  }
  return '';
}


function catTreeToString(cat: Folder, indentLevel = 0, indentSpace = 2) {
  const indent = (num: number) => ' '.repeat(num);
  const curly = indentLevel * indentSpace * 2;
  const fields = curly + indentSpace;
  const sq = curly + indentSpace;
  const curlyin = indent(curly);
  const fieldsin = indent(fields);
  const sqin = indent(sq);
  
  const formattedCategories = (cat.subfolders.filter(sub => !sub.isTask)).length > 0
    ? `[
${cat.subfolders.filter(sub => !sub.isTask).map(c => catTreeToString(c, indentLevel + 1)).join(',\n')}
${sqin}]`
    : '[]';

  return `${curlyin}{\n${fieldsin}name: '${cat.name}',\n${fieldsin}title: '${cat.meta?.[0]?.title ?? ""}',\n${fieldsin}hidden: ${cat.meta?.[0]?.hidden ?? false},\n${fieldsin}subcategories: ${formattedCategories}\n${curlyin}}`
}


async function writeTasksInfo(tasks: TaskWithContent[], rootcat: Folder) {
  let tsContent = `// Auto-generated file (${new Date().toISOString()})
import type { Task, Category } from "@/src/types/model";

export const rootcat: Category = 
${catTreeToString(rootcat)}

export const tasks: Task[] = [
${tasks.map((task, idx) => `  {  // ${idx + 1}
    id: ${JSON.stringify(task.id)},
    name: ${JSON.stringify(task.name)},
    path: ${JSON.stringify(task.path)},
    title: ${JSON.stringify(task.title)},
    categories: [${task.categories.map(c => `'${c}'`).join(', ')}],
    tags: [${task.tags.map(c => `'${c}'`).join(', ')}]
  }`).join(',\n')}
];

export default tasks;
`;

  await fs.writeFile(PATHS.output, tsContent);
}


async function writeTasksAsSingleJson(tasks: TaskWithContent[]) {
  const dir = path.join(PATHS.public, 'tasks');

  await fs.mkdir(dir, { recursive: true });

  for (const task of tasks) {
    const taskFile = path.join(dir, task.id + '.json');
    const taskContent = JSON.stringify({
      id: task.id,
      name: task.name,
      path: task.path,
      title: task.title,
      description: task.description,
      template: task.template,
      solution: task.solution,
      templateLang: task.templateLang,
      solutionLang: task.solutionLang,
      categories: task.categories,
      tags: task.tags
    }, null, 2);
    await fs.writeFile(taskFile, taskContent);
  }
}


function idFromPath(path: string) {
  return createHash('sha256').update(path).digest('hex').slice(0, 16);
}


async function genTasks() {
  const foldersTree = await buildFoldersTree(PATHS.tasks);
  await fillFoldersMeta(foldersTree);
  const flatFoldersTree = flattenFoldersTree(foldersTree);

  const taskFolders = flatFoldersTree.filter(dir => dir.isTask);
  const tasks = await Promise.all(taskFolders.map(folder => makeTask(folder)));
  
  await writeTasksInfo(tasks, foldersTree);
  await writeTasksAsSingleJson(tasks);
}


genTasks();