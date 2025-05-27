import { tasks } from "@data/tasks";
import { Task } from "@components/Task/Task";
import { Stack } from "@mui/material";


export const TaskList = () => {
  return (
    <Stack direction="column" spacing={1.5}>
      { tasks.map(t => <Task key={t.id} task={t} /> )}
    </Stack>
  )
}