import { TaskView } from "@/src/components/Task/TaskView";
import { Stack } from "@mui/material";


export const TaskList = ({ tasks }) => {
  return (
    <Stack direction="column" spacing={1.5}>
      { tasks.map(t => <TaskView key={t.id} task={t} /> )}
    </Stack>
  )
}