import { TaskView } from "@/src/components/Task/TaskView";
import { Stack } from "@mui/material";
import { Spoiler } from "@components/Spoiler";


export const TaskList = ({ tasks }) => {
  return (
    <Stack direction="column" spacing={1.5}>
      { tasks.map(task => 
          <Spoiler key={task.id}
            title={task.title || task.name} 
            content={<TaskView key={task.id} task={task} />} 
          />
      )}
    </Stack>
  )
}