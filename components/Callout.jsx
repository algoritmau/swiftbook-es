import styles from '../styles/Callout.module.css'

export default function Callout({ type, children }) {
  const calloutType = `container--${type}`
  let title = 'Nota'

  switch (type) {
    case 'beta':
      title = 'Software Beta'
      break
    case 'experiment':
      title = 'Experimenta'
      break
    case 'important':
      title = 'Importante'
      break
    default:
      title = 'Nota'
  }

  return (
    <aside className={`${styles.container} ${styles[calloutType]}`}>
      <p className={styles.title}>{title}</p>
      {children}
    </aside>
  )
}
