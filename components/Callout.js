import React from 'react'
import CalloutStyles from '../styles/Callout.module.css'

const Callout = ({ type, children }) => {
  const calloutType = `callout--${type}`
  let title

  switch (type) {
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
    <div
      className={`${CalloutStyles.callout} ${
        type !== 'note' ? CalloutStyles[calloutType] : ''
      }`}
    >
      <p className={CalloutStyles.callout__title}>{title}</p>
      {children}
    </div>
  )
}

export default Callout
