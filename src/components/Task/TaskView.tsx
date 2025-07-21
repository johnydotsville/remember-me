import { Stack } from "@mui/material";
import type { Task } from "@/src/types/model";


export function TaskView({ task }: { task: Task}) {
  return (
    <Stack sx={{
      border: '1px solid green',
    }} padding={1} direction='row' gap={1}>
      { task.title || task.name }
      Приорити: { task.descriptor?.basePriority }
    </Stack>
  )
}