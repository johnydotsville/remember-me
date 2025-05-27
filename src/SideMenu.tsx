import { Stack, Typography, Drawer, Button, Box, List, ListItem, ListItemText, ListItemButton } from "@mui/material"
import { useState } from "react"


export const SideMenu = ({ items }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);  

  return (
    <Box>
      <Button onClick={toggleMenu}>Меню</Button>
      <Drawer anchor='left' open={open} onClose={toggleMenu}>
        <List sx={{ padding: '1.25rem' }}>
          { items.map(item => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText>{item}</ListItemText>
              </ListItemButton>
          </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}