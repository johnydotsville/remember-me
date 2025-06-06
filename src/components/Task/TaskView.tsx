import { TaskDescription } from './TaskDescription';
import { SourceCodeBox } from './TaskSourceCode';
import type { Task } from '@/src/types/model';
import { SpoilerGroup } from '@components/SpoilerGroup';


export const TaskView = ({ task }: { task: Task}) => {
  const taskContent = [
    task.description && { 
      id: 'description',
      title: 'Условие задачи',
      content: <TaskDescription description={task.description} />
    },
    task.template && { 
      id: 'template',
      title: 'Шаблон',
      content: <SourceCodeBox sourceCode={task.template} />
    },
    task.solution && { 
      id: 'solution',
      title: 'Решение',
      content: <SourceCodeBox sourceCode={task.solution} />
    },
  ].filter(Boolean);

  return <SpoilerGroup items={taskContent} defaultActive='description' />
}