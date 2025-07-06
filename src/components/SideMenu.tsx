import { Drawer, Button, List, ListItem, ListItemText, ListItemButton, Stack } from "@mui/material"
import { useState } from "react"
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';


export const SideMenu = ({ items, selectItem, getRandomTask, resetAllFilters, resetDoneTasks }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const handleMenuItemClick = (item) => {
    selectItem(item);
    setOpen(!open);
  }

  return (
    <Stack direction='column'>
      <Button onClick={toggleMenu}>
        <AppsOutlinedIcon sx={{ fontSize: '2.5rem'}}></AppsOutlinedIcon>
      </Button>
      <Button onClick={getRandomTask}>
        <HelpOutlineOutlinedIcon sx={{ fontSize: '2.5rem'}}></HelpOutlineOutlinedIcon>
      </Button>
      <Button onClick={resetAllFilters}>
        <BlockOutlinedIcon sx={{ fontSize: '2.5rem'}}></BlockOutlinedIcon>
      </Button>
      <Button onClick={resetDoneTasks}>
        <PlaylistRemoveIcon sx={{ fontSize: '2.5rem'}}></PlaylistRemoveIcon>
      </Button>
      <Drawer anchor='left' open={open} onClose={toggleMenu}>
        <List sx={{ padding: '1.25rem' }}>
          { items.map(item => (
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleMenuItemClick(item)}>
                <ListItemText>{item.title !== '' ? item.title : item.name}</ListItemText>
              </ListItemButton>
          </ListItem>
          ))}
        </List>
      </Drawer>
    </Stack>
  )
}