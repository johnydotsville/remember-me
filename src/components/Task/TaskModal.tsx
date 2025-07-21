import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Stack } from "@mui/material";
import { TaskDescription } from './TaskDescription';
import { SourceCodeBox } from './TaskSourceCode';
import { SpoilerGroup } from '@components/SpoilerGroup';
import { detectLangByExtension } from '@/src/utils/detectLangByExtension';
import { TaskDifficultySelector } from "./TaskDifficultySelector";
import { useState } from "react";
import type { TaskDifficulty } from "@/src/types/model/TaskDifficulty";


export function TaskModal({ task, isOpen, onClose }) {
  const [diff, setDiff] = useState(diffs.find(d => d.code === 3));

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

  const rateTask = (taskId) => {
    window.dispatchEvent(new CustomEvent('localStorageUpdate', {
      detail: {
        taskId,
        difficulty: diff
      }
    }));
    onClose();
  }

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
          <TaskDifficultySelector diffs={diffs} defaultValue={diff} onDifficultySelect={setDiff} />
          <Button variant='outlined' color='success' onClick={() => rateTask(task.id)}>Оценить</Button>
        </Stack>
        <Button variant='outlined' onClick={onClose}>Выйти</Button>
      </DialogActions>
    </Dialog>
  );
};


const diffs: TaskDifficulty[] = [
  { code: 1, display: 'Очень легко', points: 0.5 },
  { code: 2, display: 'Легко', points: 0.8 },
  { code: 3, display: 'Нормально', points: 1 },
  { code: 4, display: 'Выше среднего', points: 1.4 },
  { code: 5, display: 'Сложно', points: 1.8 },
  { code: 6, display: 'Не смог решить', points: 2.2 }
];