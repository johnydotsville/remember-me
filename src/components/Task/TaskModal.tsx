import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Stack } from "@mui/material";
import { TaskDescription } from './TaskDescription';
import { SourceCodeBox } from './TaskSourceCode';
import { SpoilerGroup } from '@components/SpoilerGroup';
import { detectLangByExtension } from '@/src/utils/detectLangByExtension';
import { TaskRankSelector } from "./TaskRankSelector";
import { useState } from "react";
import { DEFAULT_TASK_RANKS as ranks } from "@/src/constants/defaultTaskRanks";
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import { TaskMeta } from "@components/Task/TaskMeta";
import type { TaskRanked } from "@/src/types/model/TaskRanked";
import type { TaskRank } from "@/src/types/model/TaskRank";
import type { TaskAction } from "@/src/hooks/useTaskRating";
import type { Task } from "@/src/types/model";
import { useEffect } from "react";



type Props = {
  task: TaskRanked;
  rateTask: TaskAction;
  solveTask: TaskAction;
  isOpen: boolean;
  onClose: () => void;
}


export function TaskModal({ task, rateTask, solveTask, isOpen, onClose }: Props) {
  const [fulltask, setFulltask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rank, setRank] = useState<TaskRank>(() => {
    const rank = ranks.find(d => d.code === 'normal');
    if (rank === undefined) {
      throw new Error('Сложность normal не найдена.');
    }
    return rank;
  });
  const [showTaskMeta, setShowTaskMeta] = useState(false);

  useEffect(() => {
    const loadTask = async () => {
      try {
        const response = await fetch(`/tasks/${task.id}.json`);
        if (!response.ok) throw new Error("Задача не найдена");
        const data: Task = await response.json();
        setFulltask(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Ошибка загрузки");
      } finally {
        setLoading(false);
      }
    }
    loadTask();
  }, [task.id])
  
  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!fulltask) return <div>Задача не найдена</div>;

  const taskContent = [
    fulltask.description && { 
      id: 'description',
      title: 'Условие задачи',
      content: <TaskDescription description={fulltask.description} />
    },
    fulltask.template && { 
      id: 'template',
      title: 'Шаблон',
      content: <SourceCodeBox sourceCode={fulltask.template} language={detectLangByExtension(fulltask.templateLang)} />
    },
    fulltask.solution && { 
      id: 'solution',
      title: 'Решение',
      content: <SourceCodeBox sourceCode={fulltask.solution} language={detectLangByExtension(fulltask.solutionLang)} />
    },
  ].filter(Boolean);

  // TODO: Тут везде надо будет поменять task на fulltask
  return (
    <>
      <Dialog 
        open={isOpen} onClose={onClose} 
        scroll='paper'
        fullScreen
      >
        <DialogTitle>{fulltask.title || fulltask.name}</DialogTitle>
        <DialogContent>
          <SpoilerGroup items={taskContent} defaultActive='description' />
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'space-between'}}>
          <Stack direction='row' gap={2} sx={{ flexGrow: 1 }}>
            <TaskRankSelector ranks={ranks} defaultValue={rank} onRankSelect={setRank} />
            <Button variant='outlined' color='success' onClick={() => rateTask(task, rank)}>Оценить</Button>
            <Button variant='outlined' color='success' onClick={() => { solveTask(task, rank); onClose(); }}>Решить</Button>
            <Button variant='outlined' color='success' onClick={() => setShowTaskMeta(true)}><InfoOutlineIcon /></Button>
          </Stack>
          <Button variant='outlined' onClick={onClose}>Выйти</Button>
        </DialogActions>
      </Dialog>
      {
        showTaskMeta && <TaskMeta
          task={fulltask}
          isOpen={showTaskMeta} 
          onClose={() => setShowTaskMeta(false)} />
      }
    </>
  );
};