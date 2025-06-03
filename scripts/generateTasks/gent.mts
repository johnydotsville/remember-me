import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import type { Task, Category } from '@src/types/model';


const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PROJECT_ROOT = path.join(__dirname, '../..');
const PATHS = {
  tasks: path.join(PROJECT_ROOT, 'tasks'),
  output: path.join(PROJECT_ROOT, 'data/tasks.ts')
};

// TODO: после реализации меты зачилиться, сделать рефакторинг, разбить на более мелкие фрагменты и написать тесты.
// TODO: подумать, а можно ли в директорию складывать одновременно и подкатегории, и задачи?
interface Folder {
  name: string;
  path: string;
  isTask: boolean;
  subdirectories: Folder[];
}

async function buildFoldersTree(rootDir: string): Promise<Folder> {
  const rootCategory: Folder = {
    name: 'root',
    path: rootDir,
    isTask: false,
    subdirectories: []
  };

  async function scan(category: Folder) {
    const directories = await fs.readdir(category.path);
    for (const directory of directories) {
      const fullpath = path.join(category.path, directory);
      const stat = await fs.stat(fullpath);
      if (stat.isDirectory()) {
        const childCategory: Folder = {
          name: directory,
          path: fullpath,
          isTask: false,
          subdirectories: []
        };
        category.subdirectories.push(childCategory);
        if (directory.startsWith('task-')) {
          childCategory.isTask = true;
        } else {
          childCategory.isTask = false; 
          await scan(childCategory);
        }
      }
    }
  }
  
  await scan(rootCategory);
  return rootCategory;
}


function flattenFoldersTree(root: Folder): Folder[] {
  const directories: Folder[] = [];
  directories.push(root);
  root.subdirectories.forEach(sub => directories.push(...flattenFoldersTree(sub)));
  return directories;
}


async function makeTask(folder: Folder): Promise<Task> {
  const description = await mdToString(path.join(folder.path, 'description.md'));
  const template = await sourceCodeToString(path.join(folder.path, 'template.ts'));
  const solution = await sourceCodeToString(path.join(folder.path, 'solution.ts'));
  const categories = getCategoriesFromTaskDir(folder.path);
  const meta = await getMeta(path.join(folder.path, 'meta.json'));
  
  return {
    id: path.relative(PATHS.tasks, folder.path).replace(/[\\/]/g, '-'),
    title: meta.title,
    description,
    template,
    solution,
    categories,
    tags: meta.tags
  }
}


function getCategoriesFromTaskDir(taskDir: string) {
  const base = path.dirname(path.relative(PATHS.tasks, taskDir));
  const normalized = path.normalize(base);
  return normalized.split(path.sep);
}


async function getMeta(metaPath) {
  try {
    const metaRaw = await fs.readFile(metaPath, 'utf8');
    return JSON.parse(metaRaw);
  } catch {
    console.warn(`⚠️ Осутствует meta-файл у задачи ${metaPath}.`);
    return {
      title: '',
      tags: []
    }
  }
}


async function mdToString(mdPath) {
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


async function sourceCodeToString(scPath) {
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
  
  const formattedCategories = (cat.subdirectories.filter(sub => !sub.isTask)).length > 0
    ? `[
${cat.subdirectories.filter(sub => !sub.isTask).map(c => catTreeToString(c, indentLevel + 1)).join(',\n')}
${sqin}]`
    : '[]';

  return `${curlyin}{\n${fieldsin}name: '${cat.name}',\n${fieldsin}subcategories: ${formattedCategories}\n${curlyin}}`
}


async function writeTasks(tasks: Task[], rootcat: Folder) {
  let tsContent = `// Auto-generated file (${new Date().toISOString()})
import type { Task, Category } from "@/src/types/model";

export const rootcat: Category = 
${catTreeToString(rootcat)}

export const tasks: Task[] = [
${tasks.map(task => `  {
    id: ${JSON.stringify(task.id)},
    title: ${JSON.stringify(task.title)},
    description: ${JSON.stringify(task.description)},
    template: \`${task.template.replace(/`/g, '\\`')}\`,
    solution: \`${task.solution.replace(/`/g, '\\`')}\`,
    categories: [${task.categories.map(c => `'${c}'`).join(', ')}],
    tags: [${task.tags.map(c => `'${c}'`).join(', ')}]
  }`).join(',\n')}
];

export default tasks;
`;

  await fs.writeFile(PATHS.output, tsContent);
}


async function genTasks() {
  const foldersTree = await buildFoldersTree(PATHS.tasks);
  const flatFoldersTree = flattenFoldersTree(foldersTree);

  const taskFolders = flatFoldersTree.filter(dir => dir.isTask);
  const tasks = await Promise.all(taskFolders.map(folder => makeTask(folder)));
  
  await writeTasks(tasks, foldersTree);
}

genTasks();