import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Stack } from "@mui/material";
import { TaskDescription } from './TaskDescription';
import { SourceCodeBox } from './TaskSourceCode';
import { SpoilerGroup } from '@components/SpoilerGroup';
import { detectLangByExtension } from '@/src/utils/detectLangByExtension';
import { markTaskAs } from "@/src/utils/markTaskAs";


export function TaskModal({ task, open, onClose }) {
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

  const solveTask = (taskId) => {
    markTaskAs(taskId, 'done');
    window.dispatchEvent(new Event('localStorageUpdate'));
    onClose();
  }

  const reviewTask = (taskId) => {
    markTaskAs(taskId, 'undone');
    window.dispatchEvent(new Event('localStorageUpdate'));
    onClose();
  }

  return (
    <Dialog 
      open={open} onClose={onClose} 
      scroll='paper'
      fullScreen
    >
      <DialogTitle>{task.title || task.name}</DialogTitle>
      <DialogContent>
        <SpoilerGroup items={taskContent} defaultActive='description' />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between'}}>
        <Stack direction='row' gap={2} sx={{ flexGrow: 1 }}>
          <Button variant='outlined' color='success' onClick={() => solveTask(task.id)}>Решил</Button>
          <Button variant='outlined' color='warning' onClick={() => reviewTask(task.id)}>Хочу повторить</Button>
        </Stack>
        <Button variant='outlined' onClick={onClose}>Закрыть</Button>
      </DialogActions>
    </Dialog>
  );
};