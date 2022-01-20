import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import swift from 'react-syntax-highlighter/dist/cjs/languages/hljs/swift'
import grayscale from 'react-syntax-highlighter/dist/cjs/styles/hljs/grayscale'

SyntaxHighlighter.registerLanguage('swift', swift)

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
