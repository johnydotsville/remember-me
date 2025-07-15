import { TaskDescription } from './TaskDescription';
import { SourceCodeBox } from './TaskSourceCode';
import { SpoilerGroup } from '@components/SpoilerGroup';
import type { Task } from '@/src/types/model';
import { detectLangByExtension } from '@/src/utils/detectLangByExtension';


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
      content: <SourceCodeBox sourceCode={task.template} language={detectLangByExtension(task.templateLang)} />
    },
    task.solution && { 
      id: 'solution',
      title: 'Решение',
      content: <SourceCodeBox sourceCode={task.solution} language={detectLangByExtension(task.solutionLang)} />
    },
  ].filter(Boolean);

  return <SpoilerGroup items={taskContent} defaultActive='description' />
}