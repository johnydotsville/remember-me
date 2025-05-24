import { Stack } from "@mui/material"
import { TopMenu } from "./TopMenu"
import { TaskList } from "./TaskList"
import { SideMenu } from "./SideMenu"

export const MainPage = () => {
  return (
    <Stack direction='row'>
      <SideMenu />
      <TaskList />
    </Stack>
  )
}