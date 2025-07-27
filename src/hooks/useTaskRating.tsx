import type { Task } from "@src/types/model";
import { useState } from "react";
import type { TaskRank } from "@src/types/model/TaskRank";
import type { TaskRanked } from '@src/types/model/TaskRanked';
import { DEFAULT_TASK_RANKS } from "@src/constants/defaultTaskRanks";
import { todayNoTime } from "../utils/todayNoTime";


const RANKS_STORE = 'taskranks';


export function useTaskRating(
  initialTasks: Task[],
  ranks: TaskRank[] = DEFAULT_TASK_RANKS
) {
  const [tasks, setTasks] = useState<TaskRanked[]>(() => {
    const savedRanksRaw = localStorage.getItem(RANKS_STORE);
    const savedRanks = savedRanksRaw ? JSON.parse(savedRanksRaw) : { };

    const defaultRank = ranks.find(rank => rank.code === 'cantsolve');

    return initialTasks.map(task => {
      let rank = defaultRank;
      let lastSolved = 0;
      if (savedRanks[task.id]) {
        rank = ranks.find(rank => rank.code === savedRanks[task.id].code);
        lastSolved = savedRanks[task.id].lastSolved;
      }
      return {
        ...task,
        rank,
        lastSolved
      }
    });
  });

  const rateTask = (taskId: string, rank: TaskRank) => {
    const savedRanksRaw = localStorage.getItem(RANKS_STORE);
    const savedRanks = savedRanksRaw ? JSON.parse(savedRanksRaw) : { };
    const updatedRanks = {
      ...savedRanks,
      [taskId]: {
        code: rank.code,
        lastSolved: todayNoTime()
      }
    }
    localStorage.setItem(RANKS_STORE, JSON.stringify(updatedRanks));

    setTasks(tasks.map(task => task.id !== taskId ? task : { 
      ...task, 
      rank, 
      lastSolved: todayNoTime() 
    } ));
  }


  return {
    rateTask,  // функция для выставления оценки задаче
    tasks // исходные задачи, обогащенные сложностью
  }
}