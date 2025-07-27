import { Stack, Box } from "@mui/material";
import type { TaskRanked } from "@/src/types/model/TaskRanked";


export function TaskView({ task }: { task: TaskRanked }) {
  const rankColors = {
    normal: '#39BF00',
    cantsolve: '#FF0000',
    above2: '#FF6A00',
    above1: '#FFE97F',
    below1: '#808080',
    below2: '#C0C0C0'
  };

  const rankColor = rankColors[task.rank.code] ?? '#FFFFFF';

  return (
    <Stack sx={{
      border: `1px solid ${rankColor}`,
    }} padding={1} direction='row' gap={1}>
      <Box>[{ task.rank.title }]</Box>
      <Box>{ task.title || task.name }</Box>
    </Stack>
  )
}


/*
export const DEFAULT_TASK_RANKS: TaskRank[] = [
  { id: 1, code: 'below2', title: 'Очень легко', weight: 1, agingFactor: 0.1 },
  { id: 2, code: 'below1', title: 'Легко', weight: 2, agingFactor: 0.1 },
  { id: 3, code: 'normal', title: 'Нормально', weight: 3, agingFactor: 0.1 },
  { id: 4, code: 'above1', title: 'Выше среднего', weight: 4, agingFactor: 0.1 },
  { id: 5, code: 'above2', title: 'Сложно', weight: 5, agingFactor: 0.1 },
  { id: 6, code: 'cantsolve', title: 'Не смог решить', weight: 6, agingFactor: 0.1 },
];
*/