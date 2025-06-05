import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { TaskDescription } from './TaskDescription';
import { SourceCodeBox } from './TaskSourceCode';
import type { Task } from '@/src/types/model';
import { Spoiler } from '@components/Spoiler';


export const TaskView = ({ task }: { task: Task}) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{task.title || task.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          { task.description && <Spoiler content={<TaskDescription description={task.description} />} title="Условие задачи" /> }
          { task.template && <Spoiler content={<SourceCodeBox sourceCode={task.template} />} title="Шаблон" /> }
          { task.solution && <Spoiler content={<SourceCodeBox sourceCode={task.solution} />} title="Решение" /> }
        </AccordionDetails>
      </Accordion>
    </div>
  );
}