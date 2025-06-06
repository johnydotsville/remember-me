import { useState } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const SpoilerGroup = ({ items }) => {
  const [activeSpoiler, setActiveSpoiler] = useState();
  // console.log(items)

  return (<div>
    { items.map(item =>
      <Accordion 
        key={item.id}
        expanded={item.id === activeSpoiler} 
        onChange={() => setActiveSpoiler(item.id)}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{ item.title }</Typography>
        </AccordionSummary>
        <AccordionDetails>
          { item.content }
        </AccordionDetails>
      </Accordion>
    )}
  </div>)
}