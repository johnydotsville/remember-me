import { Stack, Typography } from "@mui/material"
import DataArrayIcon from '@mui/icons-material/DataArray';

export const TopMenu = () => {
  return (
    <Stack direction='row' sx={{
      backgroundColor: 'pink',
      padding: '1rem'
    }}>
      <Stack direction='row'>
        <DataArrayIcon />
        <Typography>Задачи</Typography>
      </Stack>
    </Stack>
  )
}