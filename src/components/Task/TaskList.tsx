import { Stack } from "@mui/material";
import { TaskStripe } from "./TaskStripe";


export const TaskList = ({ tasks, doneTasks }) => {
  return (
    <Stack direction='column' gap={1} sx={{ cursor: 'pointer' }}>
      { 
        tasks.map(task => 
          <TaskStripe key={task.id} task={task} done={doneTasks.includes(task.id)} />
        ) 
      }
    </Stack>
  )
}