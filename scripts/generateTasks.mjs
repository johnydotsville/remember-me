import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PROJECT_ROOT = path.join(__dirname, '..'); // Корень проекта
const PATHS = {
  tasks: path.join(PROJECT_ROOT, 'tasks'),
  output: path.join(PROJECT_ROOT, 'src/data/tasks.ts')
};

const formatJson = (obj, indent = 2) => {
  return JSON.stringify(obj, null, indent)
    .split('\n')
    .map(line => '    ' + line) // Добавляем 4 пробела к каждой строке
    .join('\n');
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
  let description = "";
  try {
    const descriptionMd = await fs.readFile(path.join(taskdir, 'description.md'), 'utf8');
    // const descriptionHtml = marked.parse(descriptionMd);
    // description = JSON.stringify(descriptionHtml);
    description = descriptionMd;
  } catch (error) {
    console.error("Ошибка формирования описания задачи: " + error.message);
  }

  let template = "";
  try {
    template = await fs.readFile(path.join(taskdir, 'template.ts'), 'utf-8');
  } catch (error) {
    console.error("Ошибка формирования шаблона задачи: " + error.message);
  }

  let solution = "";
  try {
    solution = await fs.readFile(path.join(taskdir, 'solution.ts'), 'utf-8');
    solution = solution.replace(/\$\{/g, '\\${');
  } catch (error) {
    console.error("Ошибка формирования шаблона задачи: " + error.message);
  }

  return {
    id: path.relative(PATHS.tasks, taskdir).replace(/[\\/]/g, '-'),
    description,
    template,
    solution
  }
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