import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { TaskDescription } from './TaskDescription/TaskDescription';
import { TaskSourceCode } from './TaskSourceCode';


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


export const Task = ({ task }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{task.id}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TaskDescription description={task.description} />
          { task.solution && <SourceCodeSpoiler sourceCode={task.solution} spoilerText='Решение' /> }
        </AccordionDetails>
      </Accordion>
    </div>
  );
}