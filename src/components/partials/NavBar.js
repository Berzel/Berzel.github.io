import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="nav-bar" id="nav_bar">
      <button className="nav-bar__toggle-btn" id="nav-bar__toggle-btn">toggle navigation</button>
      <div className="nav-bar__content">

        <ul className="mobile-menu">
          <li className="mobile-menu__item"><Link to='/blog' className="mobile-menu__item__link">Blog</Link></li>
          <li className="mobile-menu__item"><Link to='/about' className="mobile-menu__item__link">About</Link></li>
          <li className="mobile-menu__item"><Link to='/videos' className="mobile-menu__item__link">Videos</Link></li>
          <li className="mobile-menu__item"><Link to='/contact' className="mobile-menu__item__link">Contact</Link></li>
          <li className="mobile-menu__item"><Link to='/portfolio' className="mobile-menu__item__link">Portfolio</Link></li>
        </ul>

        <div className="main-menu">
          <div className="main-menu__section">
            <ul className="menu">
              <li className="menu__item"><Link to='/' className="menu__item__link">Web Developer</Link></li>
              <li className="menu__item"><Link to='/' className="menu__item__link">Entreprenuer</Link></li>
              <li className="menu__item"><Link to='/' className="menu__item__link">Philanthropist</Link></li>
            </ul>
          </div>
          <div className="main-menu__section">
            <ul className="menu">
              <li className="menu__item"><Link to='/blog' className="menu__item__link">Blog</Link></li>
              <li className="menu__item"><Link to='/about' className="menu__item__link">About</Link></li>
              <li className="menu__item"><Link to='/videos' className="menu__item__link">Videos</Link></li>
              <li className="menu__item"><Link to='/contact' className="menu__item__link">Contact</Link></li>
              <li className="menu__item"><Link to='/portfolio' className="menu__item__link">Portfolio</Link></li>
            </ul>
          </div>
          <div className="main-menu__section">
            <ul className="menu">
              <li className="menu__item">
                <a href="/" className="menu__item__button">
                  <span className="menu__item__button__icon">
                    <i className="zmdi zmdi-code-setting"></i>
                  </span>
                  <span className="menu__item__button__text">
                    Work with me
                              </span>
                </a>
              </li>
              <li className="menu__item">
                <a href="/" className="menu__item__button">
                  <span className="menu__item__button__icon">
                    <i className="zmdi zmdi-email-open"></i>
                  </span>
                  <span className="menu__item__button__text">
                    My Resume
                              </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="main-menu__section">
            <ul className="social-menu">
              <li className="social-menu__item"><a href="/" className="social-menu__item__link"><i className="zmdi zmdi-facebook"></i></a></li>
              <li className="social-menu__item"><a href="/" className="social-menu__item__link "><i className="zmdi zmdi-twitter"></i></a></li>
              <li className="social-menu__item"><a href="/" className="social-menu__item__link"><i className="zmdi zmdi-youtube"></i></a></li>
              <li className="social-menu__item"><a href="/" className="social-menu__item__link"><i className="zmdi zmdi-linkedin"></i></a></li>
            </ul>
          </div>
          <footer className="footer">
            <p>&copy; 2019 Berzel Best Tumbude &mdash; All Rights Reserved. Website executed by <a href="index.html">Berzel Best.</a></p>
          </footer>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
