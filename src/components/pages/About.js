import React from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Skill from '../partials/Skill'
import AppLayout from '../layouts/AppLayout'
import Achievement from '../partials/Achievement'

const About = ({ achievements, skills }) => {
  return (
    <AppLayout>
      <div className="main-layout__content">
        <div className="main-layout__content__header">
          <div className="banner">
            <div className="banner__body">
              <h2 className="banner__body__title">
                About Berzel
                        </h2>
              <h3 className="banner__body__sub-title">
                Nerd <br />
                Wizard <br />
                Genius <br />
                Mastermind... <br />
                Berzel has been called many things.
                        </h3>

              <div className="banner__body__buttons">
                <Link to='/blog' className="btn scaled">Read the blog</Link> <a href="video.html" className="btn">Watch videos</a>
              </div>
            </div>
          </div>
        </div>

        <div className="main-layout__content__body">
          <div className="skills">
            { skills && skills.map(skill => <Skill key={uuid()} skill={skill} />) }
          </div>
          <div className="achievements">
            <div className="achievements__title">
              <h2>Berzel's Achievements</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione quod, vel assumenda optio velit!</p>
            </div>

            { achievements && achievements.map(achievement => <Achievement key={uuid()} achievement={achievement} />)}

          </div>
        </div>
      </div>
    </AppLayout>
  )
}

const mapStateToProps = state => ({
  skills : state.skills.data,
  achievements: state.achievements.data
})

export default connect(mapStateToProps)(About)
