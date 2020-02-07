import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Videos from '../pages/Videos'
import Portfolio from '../pages/Portfolio'
import PostDetail from '../pages/PostDetail'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route exact path='/blog' component={Blog} />
        <Route path='/videos' component={Videos} />
        <Route path='/contact' component={Contact} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/blog/:id' component={PostDetail} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
