import React from 'react'

const Achievement = ({ achievement }) => {
  return (
    <div className="achievement">
      <h4 className="achievement__year">{ achievement.year }</h4>
      <div className="achievement__body">
        <h3 className="achievement__title">{ achievement.title }</h3>
        <div className="achievement__description">{ achievement.description }</div>
      </div>
    </div>
  )
}

export default Achievement
