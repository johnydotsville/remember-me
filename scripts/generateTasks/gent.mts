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
interface FsDirectory {
  name: string;
  path: string;
  isTask: boolean;
  subdirectories: FsDirectory[];
}

async function buildDirectoriesTree(rootDir: string): Promise<FsDirectory> {
  const rootCategory: FsDirectory = {
    name: 'root',
    path: rootDir,
    isTask: false,
    subdirectories: []
  };

  async function scan(category: FsDirectory) {
    const directories = await fs.readdir(category.path);
    for (const directory of directories) {
      const fullpath = path.join(category.path, directory);
      const stat = await fs.stat(fullpath);
      if (stat.isDirectory()) {
        const childCategory: FsDirectory = {
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


function flattenDirectoriesTree(root: FsDirectory): FsDirectory[] {
  const directories: FsDirectory[] = [];
  directories.push(root);
  root.subdirectories.forEach(sub => directories.push(...flattenDirectoriesTree(sub)));
  return directories;
}


async function makeTask(taskdir: string): Promise<Task> {
  const description = await mdToString(path.join(taskdir, 'description.md'));
  const template = await sourceCodeToString(path.join(taskdir, 'template.ts'));
  const solution = await sourceCodeToString(path.join(taskdir, 'solution.ts'));
  const categories = getCategoriesFromTaskDir(taskdir);

  return {
    id: path.relative(PATHS.tasks, taskdir).replace(/[\\/]/g, '-'),
    description,
    template,
    solution,
    categories
  }
}


function getCategoriesFromTaskDir(taskDir: string) {
  const base = path.dirname(path.relative(PATHS.tasks, taskDir));
  const normalized = path.normalize(base);
  return normalized.split(path.sep);
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


function catTreeToString(cat: FsDirectory, indentLevel = 0, indentSpace = 2) {
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


async function writeTasks(tasks: Task[], rootcat: FsDirectory) {
  let tsContent = `// Auto-generated file (${new Date().toISOString()})
import type { Task, Category } from "@/src/types/model";

export const rootcat: Category = 
${catTreeToString(rootcat)}

export const tasks: Task[] = [
${tasks.map(task => `  {
    id: ${JSON.stringify(task.id)},
    description: ${JSON.stringify(task.description)},
    template: \`${task.template.replace(/`/g, '\\`')}\`,
    solution: \`${task.solution.replace(/`/g, '\\`')}\`,
    categories: [${task.categories.map(c => `'${c}'`).join(', ')}]
  }`).join(',\n')}
];

export default tasks;
`;

  await fs.writeFile(PATHS.output, tsContent);
}


async function genTasks() {
  const directoriesTree = await buildDirectoriesTree(PATHS.tasks);
  const flatDirectoriesTree = flattenDirectoriesTree(directoriesTree);

  const taskDirs = flatDirectoriesTree.filter(dir => dir.isTask).map(dir => dir.path);
  const tasks = await Promise.all(taskDirs.map(td => makeTask(td)));
  
  await writeTasks(tasks, directoriesTree);
}

genTasks();