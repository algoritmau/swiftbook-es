import GrammarBlockStyles from '@styles/components/GrammarBlock.module.css'

const GrammarBlock = ({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) => (
  <div className={GrammarBlockStyles.container}>
    <p className={GrammarBlockStyles.title}>{title}</p>
    {children}
  </div>
)

export default GrammarBlock
