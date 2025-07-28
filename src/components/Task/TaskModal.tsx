import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Stack } from "@mui/material";
import { TaskDescription } from './TaskDescription';
import { SourceCodeBox } from './TaskSourceCode';
import { SpoilerGroup } from '@components/SpoilerGroup';
import { detectLangByExtension } from '@/src/utils/detectLangByExtension';
import { TaskRankSelector } from "./TaskRankSelector";
import { useState } from "react";
import { DEFAULT_TASK_RANKS as ranks } from "@/src/constants/defaultTaskRanks";


export function TaskModal({ task, rateTask, solveTask, isOpen, onClose }) {
  const [rank, setRank] = useState(ranks.find(d => d.code === 'normal'));

  const taskContent = [
    task.description && { 
      id: 'description',
      title: 'Условие задачи',
      content: <TaskDescription description={task.description} />
    },
    task.template && { 
      id: 'template',
      title: 'Шаблон',
      content: <SourceCodeBox sourceCode={task.template} language={detectLangByExtension(task.templateLang)} />
    },
    task.solution && { 
      id: 'solution',
      title: 'Решение',
      content: <SourceCodeBox sourceCode={task.solution} language={detectLangByExtension(task.solutionLang)} />
    },
  ].filter(Boolean);

  return (
    <Dialog 
      open={isOpen} onClose={onClose} 
      scroll='paper'
      fullScreen
    >
      <DialogTitle>{task.title || task.name}</DialogTitle>
      <DialogContent>
        <SpoilerGroup items={taskContent} defaultActive='description' />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between'}}>
        <Stack direction='row' gap={2} sx={{ flexGrow: 1 }}>
          <TaskRankSelector ranks={ranks} defaultValue={rank} onRankSelect={setRank} />
          <Button variant='outlined' color='success' onClick={() => rateTask(task, rank)}>Оценить</Button>
          <Button variant='outlined' color='success' onClick={() => { solveTask(task, rank); onClose(); }}>Решить</Button>
        </Stack>
        <Button variant='outlined' onClick={onClose}>Выйти</Button>
      </DialogActions>
    </Dialog>
  );
};