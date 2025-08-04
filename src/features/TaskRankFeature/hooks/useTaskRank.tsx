import type { Task } from "@src/features/TaskFeature/types/Task";
import { useState } from "react";
import type { TaskRank } from "@/src/features/TaskRankFeature/types/TaskRank";
import type { TaskWithUserAttributes } from '@/src/features/TaskFeature/types/TaskWithUserAttributes';
import { DEFAULT_TASK_RANKS } from "@/src/features/TaskRankFeature/constants/defaultTaskRanks";
import { todayNoTime } from "../../../utils/todayNoTime";


const RANKS_STORE = 'taskranks';


export type TaskAction = (task: TaskWithUserAttributes, rank: TaskRank) => void;


export function useTaskRank(
  initialTasks: Task[],
  ranks: TaskRank[] = DEFAULT_TASK_RANKS
) {
  const [tasks, setTasks] = useState<TaskWithUserAttributes[]>(() => {
    const savedRanksRaw = localStorage.getItem(RANKS_STORE);
    const savedRanks = savedRanksRaw ? JSON.parse(savedRanksRaw) : { };

    const defaultRank = ranks.find(rank => rank.code === 'unknown');

    return initialTasks.map(task => {
      let rank = defaultRank;
      let lastSolved = 0;
      if (savedRanks[task.id]) {
        rank = ranks.find(rank => rank.code === savedRanks[task.id].code);
        lastSolved = savedRanks[task.id].lastSolved;
      }
      return {
        ...task,
        rank: rank!,
        lastSolved
      }
    });
  });

  const updateStorage = (task: TaskWithUserAttributes, rank: TaskRank, lastSolved: number): void => {
    const savedRanksRaw = localStorage.getItem(RANKS_STORE);
    const savedRanks = savedRanksRaw ? JSON.parse(savedRanksRaw) : { };

    const updatedRanks = {
      ...savedRanks,
      [task.id]: {
        code: rank.code,
        lastSolved
      }
    }
    localStorage.setItem(RANKS_STORE, JSON.stringify(updatedRanks));
  }

  const updateState = (taskId: string, update: Partial<TaskWithUserAttributes>): void => {
    setTasks(tasks => tasks.map(task => task.id !== taskId ? task : { ...task, ...update }));
  }

  const rateTask: TaskAction = (task, rank) => {
    updateStorage(task, rank, task.lastSolved);
    updateState(task.id, { rank })
  }

  const solveTask: TaskAction = (task, rank) => {
    const lastSolved = todayNoTime();
    updateStorage(task, rank, lastSolved);
    updateState(task.id, { rank, lastSolved })
  }


  return {
    tasks,     // исходные задачи, обогащенные сложностью
    rateTask,  // функция для выставления оценки задаче
    solveTask  // функция для отметки что задача решена
  }
}