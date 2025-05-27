import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PROJECT_ROOT = path.join(__dirname, '..');
const PATHS = {
  tasks: path.join(PROJECT_ROOT, 'tasks'),
  output: path.join(PROJECT_ROOT, 'src/data/tasks.ts')
};


async function findTaskDirs(rootDir) {
  const taskDirs = [];
  const rootcat = {
    name: 'root',
    categories: []
  };

  async function scan(dir, cat) {
    const items = await fs.readdir(dir);
    for (const item of items) {
      const fullpath = path.join(dir, item);
      const stat = await fs.stat(fullpath);
      if (stat.isDirectory()) {
        if (item.startsWith('task-')) {
          taskDirs.push(fullpath);
        } else {
          const chilcat = {
            name: item,
            categories: []
          };
          cat.categories.push(chilcat);
          await scan(fullpath, chilcat);
        }
      }
    }
  }
  
  await scan(rootDir, rootcat);
  return {
    taskDirs,
    categories: rootcat
  };
}


async function makeTask(taskdir) {
  const description = await mdToString(path.join(taskdir, 'description.md'));
  const template = await sourceCodeToString(path.join(taskdir, 'template.ts'));
  const solution = await sourceCodeToString(path.join(taskdir, 'solution.ts'));
  const categories = extractCategories(taskdir);

  return {
    id: path.relative(PATHS.tasks, taskdir).replace(/[\\/]/g, '-'),
    description,
    template,
    solution,
    categories
  }
}


function extractCategories(dir) {
  const base = path.dirname(path.relative(PATHS.tasks, dir));
  const normalized = path.normalize(base);
  return normalized.split(path.sep);
}


async function mdToString(mdPath) {
  try {
    const description = await fs.readFile(mdPath, 'utf8');
    return description;
  } catch (error) {
    console.error(`Ошибка парсинга markdown из файла '${mdPath}': ` + error.message);
  }
  return '';
}


async function sourceCodeToString(scPath) {
  try {
    const tstext = await fs.readFile(scPath, 'utf-8');
    return tstext.replace(/\$\{/g, '\\${');
  } catch (error) {
    console.error(`Ошибка парсинга source code из файла '${scPath}': ` + error.message);
  }
  return '';
}


function catTreeToString(cat, indentLevel = 0, indentSpace = 2) {
  const indent = (num) => ' '.repeat(num);
  const curly = indentLevel * indentSpace * 2;
  const fields = curly + indentSpace;
  const sq = curly + indentSpace;
  const curlyin = indent(curly);
  const fieldsin = indent(fields);
  const sqin = indent(sq);
  
  const formattedCategories = cat.categories.length > 0
    ? `[
${cat.categories.map(c => catTreeToString(c, indentLevel + 1)).join(',\n')}
${sqin}]`
    : '[]';

  return `${curlyin}{\n${fieldsin}name: '${cat.name}',\n${fieldsin}subcategories: ${formattedCategories}\n${curlyin}}`
}


async function writeTasks(tasks, rootcat) {
  let tsContent = `// Auto-generated file (${new Date().toISOString()})

export interface Task {
  id: string;
  description: string;
  template: string;
  solution: string;
  categories: string[];
}

export interface Category {
  name: string,
  subcategories: Category[]
}

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