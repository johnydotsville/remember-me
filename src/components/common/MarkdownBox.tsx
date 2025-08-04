import Markdown from 'react-markdown';
import { SourceCodeBox } from './SourceCodeBox';


export const MarkdownBox = ({ description }) => {
  return (
    <Markdown
      children={description}
      components={{
        code(props) {
          const {children, className, node, ...rest} = props
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <SourceCodeBox sourceCode={children} language={match[1]} {...rest} />
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