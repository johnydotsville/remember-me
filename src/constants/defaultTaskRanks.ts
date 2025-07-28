import type { TaskRank } from "@src/types/model/TaskRank";


export const DEFAULT_TASK_RANKS: TaskRank[] = [
  { id: 0, code: 'unknown', title: 'Неизвестно', weight: 1, agingFactor: 0.1 },
  { id: 1, code: 'below2', title: 'Очень легко', weight: 1, agingFactor: 0.1 },
  { id: 2, code: 'below1', title: 'Легко', weight: 2, agingFactor: 0.1 },
  { id: 3, code: 'normal', title: 'Нормально', weight: 3, agingFactor: 0.1 },
  { id: 4, code: 'above1', title: 'Выше среднего', weight: 4, agingFactor: 0.1 },
  { id: 5, code: 'above2', title: 'Сложно', weight: 5, agingFactor: 0.1 },
  { id: 6, code: 'cantsolve', title: 'Не смог решить', weight: 6, agingFactor: 0.1 },
];