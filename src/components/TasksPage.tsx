import { Stack, Box } from "@mui/material"
import { TaskList } from "./Task/TaskList"
import { SideMenu } from "./SideMenu"
import { rootcat } from '@data/tasks';
import { flatcats } from "@utils/flatcats";
import { useCallback, useMemo, useState, useEffect } from "react";
import { tasks as sourceTasks } from "@data/tasks";
import type { Category, Task } from '@src/types/model';
import { markTaskAsDone } from "@utils/markTaskAsDone";


export const TasksPage = () => {
  const cats = useMemo(() => flatcats(rootcat).filter(cat => !cat.hidden).sort(), [rootcat]);
  const [randomTask, setRandomTask] = useState<Task | null>(null);
  const [category, setCategory] = useState<Category>(rootcat);
  const [doneTasks, setDoneTasks] = useState(() => {
    const doneTasksRaw = localStorage.getItem('doneTasks');
    return doneTasksRaw ? JSON.parse(doneTasksRaw) : [];
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const doneTasksRaw = localStorage.getItem('doneTasks');
      const arr = doneTasksRaw ? JSON.parse(doneTasksRaw) : [];
      setDoneTasks(arr);
    }
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('localStorageUpdate', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('localStorageUpdate', handleStorageChange);
    }
  }, []);

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
    const undone = filteredTasks.filter(task => !doneTasks.includes(task.id));
    if (undone.length > 0) {
      const idx = Math.floor(Math.random() * undone.length);
      setRandomTask(undone[idx]);
      markTaskAsDone(undone[idx].id);
      window.dispatchEvent(new Event('localStorageUpdate'));
    } else {
      alert('Все задачи решены.');
    }
  }, [filteredTasks, doneTasks]);

  const resetFilters = useCallback(() => {
    setRandomTask(null);
    setCategory(rootcat);
  }, []);

  const resetDoneTasks = useCallback(() => {
    localStorage.removeItem('doneTasks');
    window.dispatchEvent(new Event('localStorageUpdate'));
  }, []);

  const displayTasks = randomTask ? [randomTask] : filteredTasks;

  return (
    <Stack direction='row'>
      <SideMenu
        items={cats} 
        selectItem={setCategory}
        getRandomTask={getRandomTask}
        resetAllFilters={resetFilters}
        resetDoneTasks={resetDoneTasks}
      />
      <Box sx={{ flex: 1 }}><TaskList tasks={displayTasks} doneTasks={doneTasks} /></Box>
    </Stack>
  )
}