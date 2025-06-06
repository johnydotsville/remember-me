import { TaskView } from "@/src/components/Task/TaskView";
import { SpoilerGroup } from "../SpoilerGroup";


export const TaskList = ({ tasks }) => {
  const taskList = tasks.map(task => ({
    id: task.id,
    title: task.title || task.name,
    content: <TaskView task={task} />
  }));

  return <SpoilerGroup items={taskList} spacing="0.5rem" />
}