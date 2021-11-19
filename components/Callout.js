import React from 'react'
import CalloutStyles from '../styles/Callout.module.css'

const Callout = ({ type, children }) => {
  const calloutType = `callout--${type}`

  return (
    <div
      className={`${CalloutStyles.callout} ${
        type === 'experiment' ? CalloutStyles[calloutType] : ''
      }`}
    >
      <p className={CalloutStyles.callout__title}>
        {type === 'note' ? 'Nota' : 'Experimenta'}
      </p>
      {children}
    </div>
  )
}

export default Callout
