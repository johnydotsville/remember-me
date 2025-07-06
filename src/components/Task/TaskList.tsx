import { TaskView } from "@/src/components/Task/TaskView";
import { SpoilerGroup } from "../SpoilerGroup";
import { Stack, Tooltip } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';


export const TaskList = ({ tasks, doneTasks }) => {
  const taskList = tasks.map(task => ({
    id: task.id,
    title:
      <Tooltip 
        title={<>
          <div>{task.path}</div>
          <div>{task.tags?.join(', ') || 'Тэги не заданы'}</div>
        </>} 
        enterDelay={2000}
      >
        <Stack direction='row' justifyContent='space-between'>
          <span>{task.title || task.name}</span>
          {doneTasks.includes(task.id) && <CheckIcon sx={{ color: 'green' }} />}
        </Stack>
      </Tooltip>,
    content: <TaskView task={task} />
  }));

  return <SpoilerGroup items={taskList} spacing="0.5rem" />
}