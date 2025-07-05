import { Stack, Box } from "@mui/material"
import { TaskList } from "./Task/TaskList"
import { SideMenu } from "./SideMenu"
import { rootcat } from '@data/tasks';
import { flatcats } from "@utils/flatcats";
import { useCallback, useMemo, useState, useEffect } from "react";
import { tasks as sourceTasks } from "@data/tasks";
import type { Category, Task } from '@src/types/model';


export const TasksPage = () => {
  const cats = useMemo(() => flatcats(rootcat).filter(cat => !cat.hidden).sort(), [rootcat]);
  const [randomTask, setRandomTask] = useState<Task | null>(null);
  const [category, setCategory] = useState<Category>(rootcat);

  useEffect(() => {
    if (randomTask) setRandomTask(null);
  }, [category]);

  const filteredTasks = useMemo(() => {
      return category.name === 'root' 
        ? sourceTasks 
        : sourceTasks.filter(task => task.categories.includes(category.name));
    }, 
    [category]
  );

  const getRandomTask = useCallback(() => {
    if (filteredTasks.length === 0) return;
    const idx = Math.floor(Math.random() * filteredTasks.length);
    setRandomTask(filteredTasks[idx]);
  }, [filteredTasks]);

  const resetFilters = useCallback(() => {
    setRandomTask(null);
    setCategory(rootcat);
  }, []);

  const displayTasks = randomTask ? [randomTask] : filteredTasks;

  return (
    <Stack direction='row'>
      <SideMenu
        items={cats} 
        selectItem={setCategory}
        getRandomTask={getRandomTask}
        resetAllFilters={resetFilters}
      />
      <Box sx={{ flex: 1 }}><TaskList tasks={displayTasks} /></Box>
    </Stack>
  )
}