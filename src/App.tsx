import { TasksPage } from "./components/TasksPage"
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BaseDarkTheme } from '@/themes/baseDark';


function App() {
  return (
    <ThemeProvider theme={BaseDarkTheme}>
      <CssBaseline />
      <TasksPage />
    </ThemeProvider>
  )
}

export default App
