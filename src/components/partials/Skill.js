import React from 'react'

import blog from '../../images/blog/blog-5.jpg'

const Skill = ({ skill }) => {
  return (
    <div className="skill">
      <div className="skill__img">
        <img src={blog} alt="A computer wizard" />
      </div>
      <div className="skill__info">
        <h3 className="skill__title">{skill.title}</h3>
        <div className="skill__description">{skill.description}</div>
      </div>
    </div>
  )
}

export default Skill
