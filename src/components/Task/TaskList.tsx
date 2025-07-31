import { Box, Stack } from "@mui/material";
import { TaskView } from "./TaskView";
import { useState } from "react";
import { TaskModal } from "./TaskModal";
import type { TaskWithUserAttributes } from "@/src/types/model/TaskWithUserAttributes";
import type { TaskAction } from "@/src/hooks/useTaskRating";


type Props = {
  tasks: TaskWithUserAttributes[];
  rateTask: TaskAction;
  solveTask: TaskAction;
}


export const TaskList = ({ tasks, rateTask, solveTask }: Props) => {
  const [selectedTask, setSelectedTask] = useState<TaskWithUserAttributes | null>(null);

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
        selectedTask && <TaskModal task={selectedTask} 
          rateTask={rateTask} 
          solveTask={solveTask} 
          isOpen={!!selectedTask} 
          onClose={() => setSelectedTask(null)} />
      }
    </>
  )
}