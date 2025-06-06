import { useState } from 'react';
import { TaskDescription } from './TaskDescription';
import { SourceCodeBox } from './TaskSourceCode';
import type { Task } from '@/src/types/model';
import { Spoiler } from '@components/Spoiler';


export const TaskView = ({ task }: { task: Task}) => {
  const [activeSpoiler, setActiveSpoiler] = useState('description');

  return (
    <Spoiler
      title={task.title || task.name}
      content={<>
         { task.description && 
            <Spoiler key={"description"} 
              open={activeSpoiler === 'description'}
              onOpen={() => setActiveSpoiler('description')}
              content={<TaskDescription description={task.description} />}
              title="Условие задачи"
            />
          }
         { task.template && 
            <Spoiler key={"template"} 
              open={activeSpoiler === 'template'}
              onOpen={() => setActiveSpoiler('template')}
              content={<SourceCodeBox sourceCode={task.template} />} 
              title="Шаблон" 
            /> 
          }
         { task.solution && 
            <Spoiler key={"solution"}
              open={activeSpoiler === 'solution'}
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