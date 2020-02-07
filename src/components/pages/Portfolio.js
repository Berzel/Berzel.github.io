import React from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'

import AppLayout from '../layouts/AppLayout'
import PortfolioItem from '../partials/PortfolioItem'

const Portfolio = ({ items }) => {
  return (
    <AppLayout>
      <div className="main-layout__content">
        <div className="main-layout__content__header">
          <div className="banner">
            <div className="banner__body">
              <h2 className="banner__body__title">
                Berzel's Portfolio
                        </h2>
              <h3 className="banner__body__sub-title">
                Berzel's works speaks for itself <br /> so we'll let it...
                        </h3>

              <div className="banner__body__buttons">
                <a href="blog.html" className="btn scaled">Read the blog</a> <a href="video.html" className="btn">Watch videos</a>
              </div>
            </div>
          </div>
        </div>

        <div className="main-layout__content__body">
          <div className="shop">
            {items && items.map(item => <PortfolioItem key={uuid()} item={item} />)}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

const mapStateToProps = state => ({
  items: state.portfolio.items
})

export default connect(mapStateToProps)(Portfolio)
