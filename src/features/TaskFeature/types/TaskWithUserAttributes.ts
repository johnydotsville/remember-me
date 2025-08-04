import type { Task } from './Task';
import type { TaskRank } from '@src/features/TaskRankFeature/types/TaskRank';


export type TaskWithUserAttributes = Task & {
  rank: TaskRank;
  lastSolved: number;
}