import PortfolioActionTypes from "./PortfolioActionTypes"
import axios from 'axios'

export const onPortfolioItemCreated = item => ({
  type: PortfolioActionTypes.CREATE_PORTFOLIO_START,
  payload: {
    item
  }
})

export const onPortfolioItemSaved = item => ({
  type: PortfolioActionTypes.CREATE_PORTFOLIO_END,
  payload: {
    item
  }
})

export const onPortfolioItemSaveError = error => ({
  type: PortfolioActionTypes.CREATE_PORTFOLIO_ERROR,
  payload: {
    error
  }
})

export const createPortfolioItem = (item) => {
  return dispatch => {
    dispatch(onPortfolioItemCreated(item))

    // TODO: Make http call to create the achievement in remote db

    dispatch(onPortfolioItemSaved(item))
  }
}

export const onGetPortfolioItems = () => ({
  type: PortfolioActionTypes.GET_PORTFOLIO_START
})

export const onGetPortfolioItemsSuccess = items => ({
  type: PortfolioActionTypes.GET_PORTFOLIO_END,
  payload: {
    items
  }
})

export const onGetPortfolioItemsError = error => ({
  type: PortfolioActionTypes.GET_PORTFOLIO_ERROR,
  payload: {
    error
  }
})

export const getPortfolioItems = () => {
  return dispatch => {
    dispatch(onGetPortfolioItems())
    axios.get('http://localhost:3030/projects')
      .then(response => dispatch(onGetPortfolioItemsSuccess(response.data)))
      .catch(err => dispatch(onGetPortfolioItemsError(err)))
  }
}