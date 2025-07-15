import { Stack } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';


export function TaskView({ task, done = false }) {
  return (
    <Stack sx={{
      border: '1px solid green',
    }} padding={1} direction='row' gap={1}>
      { done && <CheckIcon sx={{ color: 'green' }} />}
      { task.title || task.name }
    </Stack>
  )
}