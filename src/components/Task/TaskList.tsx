import { TaskView } from "@/src/components/Task/TaskView";
import { SpoilerGroup } from "../SpoilerGroup";
import { Tooltip } from "@mui/material";


export const TaskList = ({ tasks }) => {
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
        <span>{task.title || task.name}</span>
      </Tooltip>,
    content: <TaskView task={task} />
  }));

  return <SpoilerGroup items={taskList} spacing="0.5rem" />
}