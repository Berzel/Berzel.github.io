import React, { Component } from 'react'
import { connect } from 'react-redux'

import Preloader from './partials/Preloader'
import Router from './partials/Router'
import { loadApplication } from '../redux/application/ApplicationActions'


class App extends Component {

  componentDidMount = () => {
    this.props.loadApplication()
  }

  render = () => {
    return (
      this.props.loading ? <Preloader /> : <Router />
    )
  }
}

const mapStateToProps = state => ({
  loading: state.application.loading
})

const mapDispatchToProps = dispatch => ({
  loadApplication: () => dispatch(loadApplication())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)