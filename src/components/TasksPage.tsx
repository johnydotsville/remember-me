import { Stack } from "@mui/material"
import { TaskList } from "./Task/TaskList"
import { SideMenu } from "./SideMenu"
import { rootcat } from '@data/tasks';
import { flatcats } from "@utils/flatcats";
import { useCallback, useMemo, useState } from "react";
import { tasks as sourceTasks } from "@data/tasks";
import type { ITask } from '@data/tasks';


export const TasksPage = () => {
  const cats = useMemo(() => flatcats(rootcat).sort(), []);
  const [tasks] = useState(sourceTasks);
  const [category, setCategory] = useState('root');
  const [randomTask, setRandomTask] = useState<ITask | null>(null);

  const displayTasks = useMemo(() => {
    if (randomTask){
      return [randomTask];
    }
    if (category === 'root') {
      return tasks;
    }
    return tasks.filter(t => t.categories.includes(category));
  }, [category, randomTask]);

  const getRandomTask = useCallback(() => {
    if (displayTasks.length < 1) return;
    const ind = Math.floor(Math.random() * displayTasks.length);
    setRandomTask(displayTasks[ind]);
  }, [displayTasks])

  const resetRandomTask = useCallback(() => {
    setRandomTask(null);
  }, []);

  return (
    <Stack direction='row'>
      <SideMenu items={cats} 
        selectItem={(cat) => {
          setCategory(cat);
          resetRandomTask();
        }}
        getRandomTask={getRandomTask} />
      <TaskList tasks={displayTasks} />
    </Stack>
  )
}