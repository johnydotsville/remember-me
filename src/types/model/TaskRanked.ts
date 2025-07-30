import type { TaskInfo } from './TaskInfo';
import type { TaskRank } from './TaskRank';

export type TaskRanked = TaskInfo & {
  rank: TaskRank;
  lastSolved: number;
}