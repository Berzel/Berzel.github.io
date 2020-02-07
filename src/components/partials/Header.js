import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.png'

const Header = () => {
  return (
    <Link to='/'>
      <header className="header">
        <img src={logo} alt="Berzel Best Tumbude" className="header__img" />
        <h1 className="header__title">
          Berzel Best <br />
          <span className="header__title__surname">Tumbude</span>
        </h1>
      </header>
    </Link>
  )
}

export default Header
