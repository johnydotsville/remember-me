import { Stack } from "@mui/material"
import { TaskList } from "./Task/TaskList"
import { SideMenu } from "./SideMenu"
import { rootcat } from '@data/tasks';
import { flatcats } from "@utils/flatcats";
import { useMemo, useState } from "react";
import { tasks as sourceTasks } from "@data/tasks";


export const TasksPage = () => {
  const cats = useMemo(() => flatcats(rootcat).sort(), []);
  const [tasks] = useState(sourceTasks);
  const [category, setCategory] = useState('all');

  const displayTasks = useMemo(() => {
    if (category === 'all') {
      return tasks;
    }
    return tasks.filter(t => t.categories.includes(category));
  }, [category]);

  return (
    <Stack direction='row'>
      <SideMenu items={cats} selectItem={setCategory} />
      <TaskList tasks={displayTasks} />
    </Stack>
  )
}