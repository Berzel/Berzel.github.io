import React from 'react'

import Header from '../partials/Header'
import NavBar from '../partials/NavBar'

const AppLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="main-layout__nav main-layout__nav--dark">
        <Header />
        <NavBar />
      </div>

      {children}

    </div>
  )
}

export default AppLayout
