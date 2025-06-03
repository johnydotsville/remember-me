import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { TaskDescription } from './TaskDescription';
import { TaskSourceCode } from './TaskSourceCode';
import type { Task } from '@/src/types/model';


const SourceCodeSpoiler = ({ sourceCode, spoilerText }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{ spoilerText }</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TaskSourceCode sourceCode={ sourceCode } />
      </AccordionDetails>
    </Accordion>
  )
}


export const TaskView = ({ task }: { task: Task}) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{task.title || task.id}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TaskDescription description={task.description} />
          { task.template && <SourceCodeSpoiler sourceCode={task.template} spoilerText='Шаблон' /> }
          { task.solution && <SourceCodeSpoiler sourceCode={task.solution} spoilerText='Решение' /> }
        </AccordionDetails>
      </Accordion>
    </div>
  );
}