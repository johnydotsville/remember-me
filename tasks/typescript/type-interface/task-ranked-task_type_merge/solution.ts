export type TaskWithUserAttributes = Task & {
  rank: TaskRank;
  lastSolved: number;
}