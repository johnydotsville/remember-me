import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Box, Button } from '@mui/material';
import ClipboardIcon from '@mui/icons-material/FileCopy';

export const TaskSourceCode = ({ sourceCode }) => {
  return (
    <Box position='relative'>
      <SyntaxHighlighter language="typescript" style={dracula}>
        { sourceCode }
      </SyntaxHighlighter>
      <Button 
        onClick={() => handleCopyToClipboard(sourceCode)}
        size="small"
        color='warning'
        sx={{ position: 'absolute', top: '1rem', right: '0.25rem'}}
      >
        <ClipboardIcon />
      </Button>
    </Box>
  )
}


async function handleCopyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    alert('Ошибка копирования.');
  }
};