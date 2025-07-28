import { Stack, Box } from "@mui/material"
import { TaskList } from "./Task/TaskList"
import { SideMenu } from "./SideMenu"
import { rootcat } from '@data/tasks';
import { flatcats } from "@utils/flatcats";
import { useCallback, useMemo, useState, useEffect } from "react";
import { tasks as sourceTasks } from "@data/tasks";
import type { Category, Task } from '@src/types/model';
import { selectTask } from "@/src/utils/selectTask";
import { todayNoTime } from "@utils/todayNoTime";
import { useTaskRating } from "@src/hooks/useTaskRating";


export const TasksPage = () => {
  const cats = useMemo(() => flatcats(rootcat).filter(cat => !cat.hidden).sort(), [rootcat]);
  const [randomTask, setRandomTask] = useState<Task | null>(null);
  const [category, setCategory] = useState<Category>(rootcat);

  const { tasks, rateTask, solveTask } = useTaskRating(sourceTasks);

  useEffect(() => {
    if (randomTask) setRandomTask(null);
  }, [category]);

  const filteredTasks = useMemo(() => {
      return category.name === 'root' 
        ? tasks 
        : tasks.filter(task => task.categories.includes(category.name));
    }, 
    [category, tasks]
  );

  const getRandomTask = useCallback(() => {
    const didntSolveTodayYet = filteredTasks.filter(task => task.lastSolved !== todayNoTime());
    if (didntSolveTodayYet.length > 0) {
      const task = selectTask(didntSolveTodayYet);
      setRandomTask(task);
    } else {
      alert('Не осталось задач выбранной категории, которые вы еще не решали сегодня.');
    }
  }, [filteredTasks]);

  const resetFilters = useCallback(() => {
    setRandomTask(null);
    setCategory(rootcat);
  }, []);

  const taskList = randomTask ? [randomTask] : filteredTasks; 

  return (
    <Stack direction='row'>
      <SideMenu
        items={cats} 
        selectItem={setCategory}
        getRandomTask={getRandomTask}
        resetAllFilters={resetFilters}
      />
      <Box sx={{ flex: 1 }}>
        <TaskList tasks={taskList} rateTask={rateTask} solveTask={solveTask} />
      </Box>
    </Stack>
  )
}