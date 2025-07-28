import { Stack, Box } from "@mui/material";
import type { TaskRanked } from "@/src/types/model/TaskRanked";
import { RankMarker } from '@components/misc/RankMarker';


export function TaskView({ task }: { task: TaskRanked }) {
  return (
    <Stack sx={{
      border: `1px solid gray`,
    }} padding={1} direction='row' gap={1}>
      <RankMarker rank={task.rank} lastSolved={task.lastSolved} />
      <Box>{ task.title || task.name }</Box>
    </Stack>
  )
}