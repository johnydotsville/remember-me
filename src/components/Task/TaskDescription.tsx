import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import gfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import ClipboardIcon from '@mui/icons-material/FileCopy';
import { Box, Button } from '@mui/material';


const syntaxHighlightPlugin = () => tree => {
  visit(tree, 'code', node => {
    if (!node.lang || !node.value) return;
    node.type = 'html';
    node.value = `<pre><code class="${node.lang}">${node.value}</code></pre>`;
  });
};

const CustomComponent = ({ value, language }) => {
  return (
    <SyntaxHighlighter style={dracula} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

const handleCopyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    alert('Ошибка копирования.');
  }
};


export const TaskDescription = ({ description }) => {
  return (
    <ReactMarkdown 
      children={description} 
      components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(?<lang>.*)/.exec(className ?? '');
            let lang = '';
            if (match && match.groups?.lang) {
              lang = match.groups.lang;
            }
            return !inline ? (
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
                <CustomComponent value={String(children)} language={lang} />
              </Box>
            ) : (
              <code className={className}>{children}</code>
            );
          },
        }}
        remarkPlugins={[gfm]}
        rehypePlugins={[syntaxHighlightPlugin]}
    />
  )
}