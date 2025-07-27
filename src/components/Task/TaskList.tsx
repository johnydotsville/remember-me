import { Box, Stack } from "@mui/material";
import { TaskView } from "./TaskView";
import { useState } from "react";
import { TaskModal } from "./TaskModal";


export const TaskList = ({ tasks, rateTask }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <>
      <Stack direction='column' gap={1} sx={{ cursor: 'pointer' }}>
        { 
          tasks.map(task => 
            <Box key={task.id} onClick={() => setSelectedTask(task)}>
              <TaskView task={task} />
            </Box>
          ) 
        }
      </Stack>
      {
        selectedTask && <TaskModal task={selectedTask} rateTask={rateTask} isOpen={!!selectedTask} 
          onClose={() => setSelectedTask(null)} />
      }
    </>
  )
}