import { useState } from 'react';
import { TaskDescription } from './TaskDescription';
import { SourceCodeBox } from './TaskSourceCode';
import type { Task } from '@/src/types/model';
import { Spoiler } from '@components/Spoiler';


export const TaskView = ({ task }: { task: Task}) => {
  const [activeSpoiler, setActiveSpoiler] = useState('description');
  console.log(activeSpoiler);

  return (
    <Spoiler
      id='task'
      activeSpoiler={'task'}
      onOpen={() => {}}
      title={task.title || task.name}
      content={<>
         { task.description && 
            <Spoiler key={"description"} 
              id='description'
              activeSpoiler={activeSpoiler}
              onOpen={() => setActiveSpoiler('description')}
              content={<TaskDescription description={task.description} />}
              title="Условие задачи"
            />
          }
         { task.template && 
            <Spoiler key={"template"} 
              id='template'
              activeSpoiler={activeSpoiler}
              onOpen={() => setActiveSpoiler('template')}
              content={<SourceCodeBox sourceCode={task.template} />} 
              title="Шаблон" 
            /> 
          }
         { task.solution && 
            <Spoiler key={"solution"}
              id='solution'
              activeSpoiler={activeSpoiler}
              onOpen={() => setActiveSpoiler('solution')}
              content={<SourceCodeBox sourceCode={task.solution} />} 
              title="Решение" 
            /> 
          }
      </>}
    />
  );
}



// export const TaskView = ({ task }: { task: Task}) => {
//   return (
//     <Spoiler
//       title={task.title || task.name}
//       content={<>
//         { task.description && <Spoiler content={<TaskDescription description={task.description} />} title="Условие задачи" /> }
//         { task.template && <Spoiler content={<SourceCodeBox sourceCode={task.template} />} title="Шаблон" /> }
//         { task.solution && <Spoiler content={<SourceCodeBox sourceCode={task.solution} />} title="Решение" /> }
//       </>}
//     />
//   );
// }