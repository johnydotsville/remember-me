import { Box, Stack } from "@mui/material";
import { TaskListItem } from "./TaskListItem";
import { useState } from "react";
import { TaskModal } from "./TaskWindow";
import type { TaskWithUserAttributes } from "@/src/features/TaskFeature/types/TaskWithUserAttributes";
import type { TaskAction } from "@/src/features/TaskRankFeature/hooks/useTaskRank";


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
              <TaskListItem task={task} />
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