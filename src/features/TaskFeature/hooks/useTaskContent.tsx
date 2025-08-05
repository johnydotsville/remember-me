import { useEffect, useState } from "react";
import type { TaskWithContent } from "../types/TaskWithContent";


export function useTaskContent(taskId: string) {
  const [taskContent, setTaskContent] = useState<TaskWithContent | null>(null);
  const [taskContentLoading, setTaskContentLoading] = useState(false);
  const [taskContentError, setTaskContentError] = useState<string | null>(null);

  useEffect(() => {
    const loadTask = async () => {
      try {
        setTaskContentLoading(true);
        const response = await fetch(`tasks/${taskId}.json`);
        if (!response.ok) {
          throw new Error("Задача не найдена");
        }
        const data: TaskWithContent = await response.json();
        setTaskContent(data);
      } catch (err) {
        setTaskContentError(err instanceof Error ? err.message : "Ошибка загрузки");
      } finally {
        setTaskContentLoading(false);
      }
    }
    loadTask();
  }, [taskId]);

  return {
    taskContent,
    taskContentLoading,
    taskContentError
  }
}