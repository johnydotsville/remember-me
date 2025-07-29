import { Stack, Box, Typography } from "@mui/material";
import type { TaskRanked } from "@/src/types/model/TaskRanked";
import { RankMarker } from '@components/misc/RankMarker';
import { timestampToDate } from '@src/utils/timestampToDate';
import { getColorByDateDiffHSL } from '@src/utils/getColorByDateDiffHSL';
import { getDiffInDays } from "@/src/utils/getDiffInDays";
import { todayNoTime } from "@/src/utils/todayNoTime";


export function TaskView({ task }: { task: TaskRanked }) {
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center' paddingInline={1} sx={{ border: `1px solid gray` }}>
      <Stack direction='row' padding={1} gap={1} flexShrink={0}>
        <RankMarker rank={task.rank} lastSolved={task.lastSolved} />
        <Box>{ task.title || task.name }</Box>
      </Stack>
      { task.lastSolved !== 0 && 
        <Typography color={getColorByDateDiffHSL(task.lastSolved)} flexShrink={0}>
          { timestampToDate(task.lastSolved) } ({getDiffInDays(todayNoTime(), task.lastSolved)} дн. назад)
        </Typography>
      }
    </Stack>
  )
}