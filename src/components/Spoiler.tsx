import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const Spoiler = ({ content, title, id, activeSpoiler, onOpen }) => {
  return (
    <Accordion 
      expanded={id === activeSpoiler}
      onChange={() => { if (onOpen) onOpen(id) }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{ title }</Typography>
      </AccordionSummary>
      <AccordionDetails>
        { content }
      </AccordionDetails>
    </Accordion>
  )
}