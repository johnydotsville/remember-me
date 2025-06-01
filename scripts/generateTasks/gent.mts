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
async function findTaskDirs(rootDir: string) {
  const directoriesWithTask: string[] = [];
  const rootCategory: Category = {
    name: 'root',
    subcategories: []
  };

  async function scan(directory: string, category: Category) {
    const items = await fs.readdir(directory);
    for (const item of items) {
      const fullpath = path.join(directory, item);
      const stat = await fs.stat(fullpath);
      if (stat.isDirectory()) {
        if (item.startsWith('task-')) {
          directoriesWithTask.push(fullpath);
        } else {
          const childCategory: Category = {
            name: item,
            subcategories: []
          };
          category.subcategories.push(childCategory);
          await scan(fullpath, childCategory);
        }
      }
    }
  }
  
  await scan(rootDir, rootCategory);
  return {
    taskDirs: directoriesWithTask,
    categories: rootCategory
  };
}

// interface FsCategory extends Category {
interface FsCategory {
  name: string;
  directory: string;
  isTask: boolean;
  subcategories: FsCategory[];
}

async function buildDirectoriesTree(rootDir: string): Promise<FsCategory> {
  const rootCategory: FsCategory = {
    name: 'root',
    directory: rootDir,
    isTask: false,
    subcategories: []
  };

  async function scan(category: FsCategory) {
    const directories = await fs.readdir(category.directory);
    for (const directory of directories) {
      const fullpath = path.join(directory, category.directory);
      const stat = await fs.stat(fullpath);
      if (stat.isDirectory()) {
        const childCategory: FsCategory = {
          name: directory,
          directory: fullpath,
          isTask: false,
          subcategories: []
        };
        if (directory.startsWith('task-')) {
          childCategory.isTask = true;
        } else {
          childCategory.isTask = false; 
          category.subcategories.push(childCategory);
          await scan(childCategory);
        }
      }
    }
  }
  
  await scan(rootCategory);
  return rootCategory;
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


function catTreeToString(cat: Category, indentLevel = 0, indentSpace = 2) {
  const indent = (num: number) => ' '.repeat(num);
  const curly = indentLevel * indentSpace * 2;
  const fields = curly + indentSpace;
  const sq = curly + indentSpace;
  const curlyin = indent(curly);
  const fieldsin = indent(fields);
  const sqin = indent(sq);
  
  const formattedCategories = cat.subcategories.length > 0
    ? `[
${cat.subcategories.map(c => catTreeToString(c, indentLevel + 1)).join(',\n')}
${sqin}]`
    : '[]';

  return `${curlyin}{\n${fieldsin}name: '${cat.name}',\n${fieldsin}subcategories: ${formattedCategories}\n${curlyin}}`
}


async function writeTasks(tasks, rootcat) {
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
  const { taskDirs, categories } = await findTaskDirs(PATHS.tasks);
  const tasks = await Promise.all(taskDirs.map(td => makeTask(td)));
  await writeTasks(tasks, categories);
}

genTasks();