import { useState } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from "@mui/material";

export const SpoilerGroup = ({ items, spacing = "0.25rem" }) => {
  const [activeSpoiler, setActiveSpoiler] = useState('none');

  const spoilerClick = (id) => {
    if (id === activeSpoiler)
      setActiveSpoiler('none');
    else
      setActiveSpoiler(id)
  }

  return (
    <Stack direction="column" spacing={spacing}>
      { items.map(item =>
        <Accordion 
          key={item.id}
          expanded={item.id === activeSpoiler} 
          onChange={() => spoilerClick(item.id)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{ item.title }</Typography>
          </AccordionSummary>
          <AccordionDetails>
            { item.content }
          </AccordionDetails>
        </Accordion>
      )}
    </Stack>
  )
}