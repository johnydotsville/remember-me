import type { Task } from './Task';
import type { TaskRank } from './TaskRank';

export type TaskRanked = Task & {
  rank: TaskRank;
  lastSolved: number;
}