import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export const Spoiler = ({ content, title, open = false, onOpen = () => {} }) => {
  const [expand, setExpand] = useState(open);

  const handleAccordionChange = (e, expanded) => {
    setExpand(expanded);
    onOpen();
  };

  return (
    <Accordion expanded={expand} onChange={handleAccordionChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{ title }</Typography>
      </AccordionSummary>
      <AccordionDetails>
        { content }
      </AccordionDetails>
    </Accordion>
  )
}