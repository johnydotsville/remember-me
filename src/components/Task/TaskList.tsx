import { Box, Stack } from "@mui/material";
import { TaskView } from "./TaskView";
import { useState } from "react";
import { TaskModal } from "./TaskModal";


export const TaskList = ({ tasks, doneTasks }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <>
      <Stack direction='column' gap={1} sx={{ cursor: 'pointer' }}>
        { 
          tasks.map(task => 
            <Box key={task.id} onClick={() => setSelectedTask(task)}>
              <TaskView task={task} done={doneTasks.includes(task.id)} />
            </Box>
          ) 
        }
      </Stack>
      {
        selectedTask && <TaskModal task={selectedTask} open={!!selectedTask} 
          onClose={() => setSelectedTask(null)} />
      }
    </>
  )
}