import React from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'

import AppLayout from '../layouts/AppLayout'
import BlogSummary from '../partials/BlogSummary'

const Videos = ({ posts }) => {
  return (
    <AppLayout>
      <div className="main-layout__content">
        <div className="main-layout__content__header">
          <div className="banner">
            <div className="banner__body">
              <h2 className="banner__body__title">
                Berzel's Videos
                        </h2>
              <h3 className="banner__body__sub-title">
                An inside scoop on Berzel's daily thoughts <br /> and epiphanies...
                        </h3>

              <div className="banner__body__buttons">
                <a href="blog.html" className="btn scaled">Read the blog</a> <a href="video.html" className="btn">Watch videos</a>
              </div>
            </div>
          </div>
        </div>

        <div className="main-layout__content__body">
          <div className="blog">
            {posts && posts.map(post => <BlogSummary key={uuid()} post={post} isVideo />)}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

const mapStateToProps = state => ({
  posts: state.posts.data
})

export default connect(mapStateToProps)(Videos)
