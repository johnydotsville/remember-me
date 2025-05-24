import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PROJECT_ROOT = path.join(__dirname, '..'); // Корень проекта
const PATHS = {
  tasks: path.join(PROJECT_ROOT, 'tasks'),
  output: path.join(PROJECT_ROOT, 'src/data/tasks.ts')
};


async function findTaskDirs(rootDir) {
  const taskDirs = [];

  async function scan(dir) {
    const items = await fs.readdir(dir);
    for (const item of items) {
      const fullpath = path.join(dir, item);
      const stat = await fs.stat(fullpath);
      if (stat.isDirectory() && item.startsWith('task-')) {
        taskDirs.push(fullpath);
      } else {
        await scan(fullpath);
      }
    }
  }

  await scan(rootDir);
  return taskDirs;
}


async function makeTask(taskdir) {
  const description = await mdToString(path.join(taskdir, 'description.md'));
  const template = await sourceCodeToString(path.join(taskdir, 'template.ts'));
  const solution = await sourceCodeToString(path.join(taskdir, 'solution.ts'));

  return {
    id: path.relative(PATHS.tasks, taskdir).replace(/[\\/]/g, '-'),
    description,
    template,
    solution
  }
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


async function writeTasks(tasks) {
  let tsContent = `// Auto-generated file (${new Date().toISOString()})

interface Task {
  id: string;
  description: string;
  template: string;
  solution: string;
}

export const tasks: Task[] = [
${tasks.map(task => `  {
    id: ${JSON.stringify(task.id)},
    description: ${JSON.stringify(task.description)},
    template: \`${task.template.replace(/`/g, '\\`')}\`,
    solution: \`${task.solution.replace(/`/g, '\\`')}\`
  }`).join(',\n')}
];

export default tasks;
`;

  await fs.writeFile(PATHS.output, tsContent);
}


async function genTasks() {
  const taskDirs = await findTaskDirs(PATHS.tasks);
  const tasks = await Promise.all(taskDirs.map(td => makeTask(td)));
  await writeTasks(tasks);
}

genTasks();