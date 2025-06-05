import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ClipboardIcon from '@mui/icons-material/FileCopy';
import { Box, Button } from '@mui/material';
import Markdown from 'react-markdown';


const handleCopyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    alert('Ошибка копирования.');
  }
};


export const TaskDescription = ({ description }) => {
  console.log(description)
  return (
    <Markdown
      children={description}
      components={{
        code(props) {
          const {children, className, node, ...rest} = props
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <Box position='relative'>
              <Button 
                onClick={() => handleCopyToClipboard(String(children))}
                aria-label="Копировать"
                size="small"
                color='warning'
                sx={{ position: 'absolute', top: '1rem', right: '0.25rem' }}
              >
                <ClipboardIcon />
              </Button>
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={ dracula }
              />
            </Box>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          )
        }
      }}
    />
  )
}