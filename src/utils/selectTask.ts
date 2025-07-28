import type { TaskRanked } from "../types/model/TaskRanked";
import { todayNoTime } from "./todayNoTime";


export function selectTask(tasks: TaskRanked[]): TaskRanked {
  tasks.sort((a, b) => a.lastSolved - b.lastSolved);
  
  // Выбираем топ-30% задач из самых давно не решаемых
  const topCandidates = tasks.slice(0, Math.max(1, Math.floor(tasks.length * 0.3)));
  
  const randomIndex = Math.floor(Math.random() * topCandidates.length);
  return topCandidates[randomIndex];
}


// Артефакты попыток учесть сложность задачи при выборе
// export function selectTask(tasks: TaskRanked[]): TaskRanked {
//   // Снабжаем задачи приоритетом на основе их сложности и давности решения
//   const tasksWithPriority = tasks.map(task => ({
//     task,
//     priority: calcPriority(task)
//   }));
  
//   // Сортируем по убыванию приоритета
//   tasksWithPriority.sort((a, b) => b.priority - a.priority);
  
//   // // Выбираем топ-30% задач с наивысшим приоритетом
//   // const topCandidates = tasksWithPriority.slice(
//   //   0, 
//   //   Math.max(1, Math.floor(tasksWithPriority.length * 0.3))
//   // );
  
//   // Случайный выбор из лучших кандидатов
//   const randomIndex = Math.floor(Math.random() * topCandidates.length);
//   return topCandidates[randomIndex].task;
// }


// function calcPriority(task: TaskRanked) {
//   const DAYS_MS = 86400000;  // 1 день в мс

//   const daysSinceLastSolved = task.lastSolved > 0 
//     ? (todayNoTime() - task.lastSolved) / DAYS_MS 
//     : 1;  // Условная давность для задач, которые еще не решали

//   let baseWeight = task.rank.weight;

//   if (task.lastSolved === 0) {
//     // Мб какой-то буст для задач, которые еще не решали
//     // baseWeight *= ???
//   }

//   return baseWeight * (1 + task.rank.agingFactor * daysSinceLastSolved);
// }