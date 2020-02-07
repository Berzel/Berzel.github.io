import React from 'react'

import blog from '../../images/blog/blog-1.jpg'

const PortfolioItem = ({ item }) => {
  return (
    <div className="shop-item">
      <img src={blog} alt="Shop item" className="shop-item__img" />
      <div className="shop-item__detail">
        <p className="shop-item__name"><a href="/">{item.name}</a> <br /> <span className="shop-item__owner">By {item.author.name}</span></p>
        <a href="/"><i className="zmdi zmdi-bookmark-outline"></i></a>
        <a href="/"><i className="zmdi zmdi-eye"></i></a>
      </div>
    </div>
  )
}

export default PortfolioItem
