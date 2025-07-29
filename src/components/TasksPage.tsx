import { Stack, Box, Typography } from "@mui/material"
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

  const solveTaskFn = useCallback((task, rank) => {
    solveTask(task, rank);
    setRandomTask(null);
  }, [tasks]);

  const rateTaskFn = useCallback((task, rank) => {
    rateTask(task, rank);
    setRandomTask(null);
  }, [tasks]);

  const taskStats = useMemo(() => {
    const total = tasks.length;
    const solved = tasks.filter(t => t.lastSolved > 0).length;
    const unsolved = total - solved;
    return {
      total,
      solved,
      unsolved
    }
  }, [tasks])

  return (
    <Stack direction='row'>
      <SideMenu
        items={cats} 
        selectItem={setCategory}
        getRandomTask={getRandomTask}
        resetAllFilters={resetFilters}
      />
      <Box sx={{ flex: 1 }}>
        <Stack direction='row' justifyContent='space-around' 
          sx={{ position: "sticky", top: 0, backgroundColor: '#4C4C4C' }}
        >
          <Typography color="">Всего задач: {taskStats.total}</Typography>
          <Typography>Решено: {taskStats.solved}</Typography>
          <Typography>Осталось: {taskStats.unsolved}</Typography>
        </Stack>
        <TaskList tasks={taskList} rateTask={rateTaskFn} solveTask={solveTaskFn} />
      </Box>
    </Stack>
  )
}