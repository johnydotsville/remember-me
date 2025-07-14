import { TaskDescription } from './TaskDescription';
import { SourceCodeBox } from './TaskSourceCode';
import type { Task } from '@/src/types/model';
import { SpoilerGroup } from '@components/SpoilerGroup';
import { detectLangByExtension } from '@/src/utils/detectLangByExtension';


export const TaskView = ({ task }: { task: Task}) => {
  console.log(task.templateLang)
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
      // content: <SourceCodeBox sourceCode={task.template} />
    },
    task.solution && { 
      id: 'solution',
      title: 'Решение',
      content: <SourceCodeBox sourceCode={task.solution} language={detectLangByExtension(task.solutionLang)} />
      // content: <SourceCodeBox sourceCode={task.solution} />
    },
  ].filter(Boolean);

  return <SpoilerGroup items={taskContent} defaultActive='description' />
}