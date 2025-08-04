import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Stack } from "@mui/material";
import { MarkdownBox } from '@components/common/MarkdownBox';
import { SourceCodeBox } from '@components/common/SourceCodeBox';
import { SpoilerGroup } from '@/src/components/common/Spoiler/SpoilerGroup';
import { useState } from "react";
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import { TaskMeta } from "./TaskMeta";
import { detectLangByExtension } from '../utils/detectLangByExtension';
import type { TaskWithUserAttributes } from "../types/TaskWithUserAttributes";
import type { TaskRank } from "@/src/features/TaskRankFeature/types/TaskRank";
import { TaskRankSelector } from "@src/features/TaskRankFeature/components/TaskRankSelector";
import type { TaskAction } from "@/src/features/TaskRankFeature/hooks/useTaskRank";
import { DEFAULT_TASK_RANKS as ranks } from "@/src/features/TaskRankFeature/constants/defaultTaskRanks";
import { useTaskContent } from "../hooks/useTaskContent";


type Props = {
  task: TaskWithUserAttributes;
  rateTask: TaskAction;
  solveTask: TaskAction;
  isOpen: boolean;
  onClose: () => void;
}


export function TaskModal({ task, rateTask, solveTask, isOpen, onClose }: Props) {
  const { taskContent, taskContentLoading, taskContentError} = useTaskContent(task.id);

  const [rank, setRank] = useState<TaskRank>(() => {
    const rank = ranks.find(d => d.code === 'normal');
    if (rank === undefined) {
      throw new Error('Сложность normal не найдена.');
    }
    return rank;
  });
  const [showTaskMeta, setShowTaskMeta] = useState(false);

  if (taskContentLoading) return <div>Загрузка задачи...</div>;
  if (taskContentError) return <div>Ошибка: {taskContentError}</div>;
  if (!taskContent) return <div>Задача не найдена</div>;

  const taskSections = [
    taskContent.description && { 
      id: 'description',
      title: 'Условие задачи',
      content: <MarkdownBox description={taskContent.description} />
    },
    taskContent.template && { 
      id: 'template',
      title: 'Шаблон',
      content: <SourceCodeBox sourceCode={taskContent.template} language={detectLangByExtension(taskContent.templateLang)} />
    },
    taskContent.solution && { 
      id: 'solution',
      title: 'Решение',
      content: <SourceCodeBox sourceCode={taskContent.solution} language={detectLangByExtension(taskContent.solutionLang)} />
    },
  ].filter(Boolean);

  return (
    <>
      <Dialog 
        open={isOpen} onClose={onClose} 
        scroll='paper'
        fullScreen
      >
        <DialogTitle>{task.title || task.name}</DialogTitle>
        <DialogContent>
          <SpoilerGroup items={taskSections} defaultActive='description' />
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
          task={task}
          isOpen={showTaskMeta} 
          onClose={() => setShowTaskMeta(false)} />
      }
    </>
  );
};