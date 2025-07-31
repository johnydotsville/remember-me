import type { Task } from './Task';
import type { TaskRank } from './TaskRank';


export type TaskWithUserAttributes = Task & {
  rank: TaskRank;
  lastSolved: number;
}