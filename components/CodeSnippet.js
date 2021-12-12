import SyntaxHighlighter from 'react-syntax-highlighter'
import { grayscale } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CodeSnippet = ({ children, isCalloutChild = false }) => {
  const code = children.trim()
  const calloutChildClass = isCalloutChild ? 'code-snippet--callout-child' : ''

  return (
    <SyntaxHighlighter
      language="swift"
      style={grayscale}
      showLineNumbers={true}
      className={`code-snippet ${calloutChildClass}`}
    >
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeSnippet
