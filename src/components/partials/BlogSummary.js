import React from 'react'
import uuid from 'uuid/v4'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.png'
import blog from '../../images/blog/blog-1.jpg'

const BlogSummary = ({ isVideo, post }) => {
  const className = isVideo ? 'blog__item__img is-video' : 'blog__item__img'
  return (
    <div className="blog__item">
      <div className={className}>
        <img src={blog} alt="Blog item" />
        {isVideo && <div class="is-video__overlay">
          <i class="zmdi zmdi-play-circle-outline"></i>
        </div>}
      </div>
      <div className="blog__item__author">
        <img src={logo} alt="Author" />
        <p className="blog__item__author__name">{post.author.name}<span className="blog__date"> &mdash; {post.createdAt}</span></p>
      </div>
      <div className="blog__item__body">
        <h2 className="blog__item__title"><Link to={`/blog/${post.id}`} className="blog__item__link">{post.title}</Link></h2>
        {post.tags && post.tags.map(tag => <Link to="/blog" key={uuid()} className="tag">{tag.name}</Link>)}
      </div>
    </div>
  )
}

export default BlogSummary
