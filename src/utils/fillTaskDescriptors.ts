import type { Task } from "@src/types/model";


export function fillTaskDescriptors(tasks: Task[]): Task[] {
  const descriptorsRaw = localStorage.getItem('taskDescriptors');

  if (descriptorsRaw === undefined) {
    return tasks.map(task => ({
      ...task,
      descriptor: {
        basePriority: 1,
        lastPickDate: new Date().setHours(0, 0, 0, 0)
      }
    }));
  }

  const descriptors = descriptorsRaw ? JSON.parse(descriptorsRaw) : { };

  return tasks.map(task => {
    if (Object.hasOwn(descriptors, task.id)) {
      return {
        ...task,
        descriptor: {
          basePriority: descriptors[task.id].basePriority,
          lastPickDate: descriptors[task.id].lastPickDate
        }
      }
    } else {
      return {
        ...task,
        descriptor: {
          basePriority: 1,
          lastPickDate: new Date().setHours(0, 0, 0, 0)
        }
      };
    }
  })
}