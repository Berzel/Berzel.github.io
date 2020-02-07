import React from 'react'

import AppLayout from '../layouts/AppLayout'

const Home = () => {
  return (
    <AppLayout>
      <div className="main-layout__content">
        <div className="main-layout__content__header">
          <div className="banner">
            <div className="banner__body">
              <h2 className="banner__body__title">
                BT. Developer. Entreprenuer.<br />
                Philanthropist. Ninja.
                            </h2>
              <h3 className="banner__body__sub-title">
                He is <span id="typed">a ninja</span>
              </h3>
              <p className="banner__body__content-body">
                ...a self driven profesional web developer, who loves working on the web; building high quality websites, liabraries and API's from ground. A risk taker, an entreprenuer who believes that an idea is only as good as its execution, is the founder of ABC, which in 2019 earned him the 'Entreprenuer of the year' award, and he's also the co-founder of XYZ. He believes that `to master the game, one must first know the fundamentals and know them deeply`.

                <span className="banner__body__content-body__extra"> Although primarily a backend/PHP web developer, his curiosity and love for continuos learning propelled him to master CSS, and JavaScript which he now uses to build and maintain Barnyard and Another Website (All that and stuff). Not only does Berzel enjoy work that challenges him to learn something new and stretch in a different direction, his spirit is lifted when his work improves the life of those around him. He is passionate about startups and believes that respect in life (as in business) is earned. When not glued to a computer screen, Berzel spends his time driving, swimming and trying so hard not to be the worst pool player in Beitbridge.
                </span>
              </p>

              <div className="banner__body__buttons">
                <a href="blog.html" className="btn scaled">Read the blog</a> <a href="video.html" className="btn">Watch videos</a>
              </div>
            </div>
          </div>
        </div>

        <div className="main-layout__content__body">
          <div className="tile-row">
            <a href="/" className="tile tile--rounded tile--raised">
              <h3 className="tile__title">Web developer</h3>
              <p className="tile__body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptatibus.</p>
            </a>
            <a href="/" className="tile tile--rounded tile--raised">
              <h3 className="tile__title">Entreprenuer</h3>
              <p className="tile__body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, distinctio?</p>
            </a>
            <a href="/" className="tile tile--rounded tile--raised">
              <h3 className="tile__title">Philanthropist</h3>
              <p className="tile__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, odio! lorem</p>
            </a>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Home