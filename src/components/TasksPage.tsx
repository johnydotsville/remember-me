import { Stack, Box } from "@mui/material"
import { TaskList } from "./Task/TaskList"
import { SideMenu } from "./SideMenu"
import { rootcat } from '@data/tasks';
import { flatcats } from "@utils/flatcats";
import { useCallback, useMemo, useState } from "react";
import { tasks as sourceTasks } from "@data/tasks";
import type { Category, Task } from '@src/types/model';


export const TasksPage = () => {
  const cats = useMemo(() => flatcats(rootcat).filter(cat => !cat.hidden).sort(), []);
  const [tasks] = useState(sourceTasks);
  const [category, setCategory] = useState<Category>(rootcat);
  const [randomTask, setRandomTask] = useState<Task | null>(null);

  const displayTasks = useMemo(() => {
    if (randomTask){
      return [randomTask];
    }
    if (category.name === 'root') {
      return tasks;
    }
    return tasks.filter(task => task.categories.includes(category.name));
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
      <SideMenu
        items={cats} 
        selectItem={(category: Category) => {
          setCategory(category);
          resetRandomTask();
        }}
        getRandomTask={getRandomTask}
        resetAllFilters={() => {
          setCategory(rootcat);
          resetRandomTask();
        }}
      />
      <Box sx={{ flex: 1 }}><TaskList tasks={displayTasks} /></Box>
    </Stack>
  )
}