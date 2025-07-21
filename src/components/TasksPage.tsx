import { Stack, Box } from "@mui/material"
import { TaskList } from "./Task/TaskList"
import { SideMenu } from "./SideMenu"
import { rootcat } from '@data/tasks';
import { flatcats } from "@utils/flatcats";
import { useCallback, useMemo, useState, useEffect } from "react";
import { tasks as sourceTasks } from "@data/tasks";
import type { Category, Task } from '@src/types/model';
import { fillTaskDescriptors } from "@utils/fillTaskDescriptors";


export const TasksPage = () => {
  const cats = useMemo(() => flatcats(rootcat).filter(cat => !cat.hidden).sort(), [rootcat]);
  const [randomTask, setRandomTask] = useState<Task | null>(null);
  const [category, setCategory] = useState<Category>(rootcat);

  const [tasks, setTasks] = useState(() => fillTaskDescriptors(sourceTasks));

  useEffect(() => {
    const handleStorageChange = (event) => {
      const { detail: payload } = event;
      const descriptorsRaw = localStorage.getItem('taskDescriptors');
      const descriptors = descriptorsRaw ? JSON.parse(descriptorsRaw) : { };

      const oldDescriptor = descriptors[payload.taskId];
      let bp = 1;
      if (oldDescriptor !== undefined) {
        bp = oldDescriptor.basePriority;
      }

      const newDescriptor = {
        basePriority: bp * payload.difficulty.points,
        lastPickDate: new Date().setHours(0, 0, 0, 0)
      };

      const updated = {
        ...descriptors,
        [payload.taskId]: newDescriptor
      }

      localStorage.setItem('taskDescriptors', JSON.stringify(updated));
      setTasks(prevTasks => prevTasks.map(task => 
        task.id === payload.taskId 
          ? { ...task, descriptor: { ...newDescriptor } } 
          : task
      ));
    }

    window.addEventListener('localStorageUpdate', handleStorageChange);

    return () => {
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
    
  }, [filteredTasks]);

  const resetFilters = useCallback(() => {
    setRandomTask(null);
    setCategory(rootcat);
  }, []);

  const resetDoneTasks = useCallback(() => {
    localStorage.removeItem('doneTasks');
    window.dispatchEvent(new Event('localStorageUpdate'));
  }, []);

  return (
    <Stack direction='row'>
      <SideMenu
        items={cats} 
        selectItem={setCategory}
        getRandomTask={getRandomTask}
        resetAllFilters={resetFilters}
        resetDoneTasks={resetDoneTasks}
      />
      <Box sx={{ flex: 1 }}>
        <TaskList tasks={tasks} />
      </Box>
    </Stack>
  )
}