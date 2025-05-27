import { Stack } from "@mui/material"
import { TaskList } from "./Task/TaskList"
import { SideMenu } from "./SideMenu"
import { rootcat } from '@data/tasks';
import { flatcats } from "@utils/flatcats";
import { useMemo } from "react";


export const MainPage = () => {
  const cats = useMemo(() => flatcats(rootcat).sort(), []);

  const categs = flatcats(rootcat).join(', ');
  console.log(categs)
  return (
    <Stack direction='row'>
      <SideMenu items={cats} />
      <TaskList />
    </Stack>
  )
}