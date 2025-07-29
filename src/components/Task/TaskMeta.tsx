import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Stack, Box } from "@mui/material";


export function TaskMeta({ task, isOpen, onClose }) {
  return (
    <Dialog
      open={isOpen} onClose={onClose} 
      scroll='paper'
      sx={{
        '& .MuiDialog-paper': {
          width: '75%',
          maxWidth: 'none',
        }
      }}
    >
      <DialogTitle>Метаданные задачи {task.id}</DialogTitle>
      <DialogContent>
        <Box>Расположение задачи: {task.path}</Box>
        <Box>Категории: {task.categories.join(', ')}</Box>
        <Box>Тэги: {task.tags.join(', ')}</Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'flex-end'}}>
        <Button variant='outlined' onClick={onClose}>Закрыть</Button>
      </DialogActions>
    </Dialog>
  )
}