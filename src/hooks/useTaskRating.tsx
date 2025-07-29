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

  const rateTask = (task: TaskRanked, rank: TaskRank) => {
    const savedRanksRaw = localStorage.getItem(RANKS_STORE);
    const savedRanks = savedRanksRaw ? JSON.parse(savedRanksRaw) : { };

    const updatedRanks = {
      ...savedRanks,
      [task.id]: {
        code: rank.code,
        lastSolved: task.lastSolved
      }
    }
    localStorage.setItem(RANKS_STORE, JSON.stringify(updatedRanks));

    setTasks(tasks.map(t => t.id !== task.id ? t : { ...task, rank }));
  }

  // TODO: можно ли как-то отрефакторить? Функции выглядят слишком похоже друг на друга.
  const solveTask = (task: TaskRanked, rank: TaskRank) => {
    const savedRanksRaw = localStorage.getItem(RANKS_STORE);
    const savedRanks = savedRanksRaw ? JSON.parse(savedRanksRaw) : { };
    const lastSolved = todayNoTime();

    const updatedRanks = {
      ...savedRanks,
      [task.id]: {
        code: rank.code,
        lastSolved
      }
    }
    localStorage.setItem(RANKS_STORE, JSON.stringify(updatedRanks));

    setTasks(tasks.map(t => t.id !== task.id ? t : { ...task, rank, lastSolved }));
  }


  return {
    tasks,     // исходные задачи, обогащенные сложностью
    rateTask,  // функция для выставления оценки задаче
    solveTask  // функция для отметки что задача решена
  }
}