import PortfolioActionTypes from "./PortfolioActionTypes"

const initialState = {
  items: [],
  error: null
}

const PortfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case PortfolioActionTypes.CREATE_PORTFOLIO_START:
      return {
        ...state,
        items: state.items.concat(action.payload.item)
      }

    case PortfolioActionTypes.CREATE_PORTFOLIO_END:
      return {
        ...state,
        error: null
      }

    case PortfolioActionTypes.CREATE_PORTFOLIO_ERROR:
      return {
        ...state,
        error: action.payload.error
      }

    case PortfolioActionTypes.GET_PORTFOLIO_END:
      return {
        ...state,
        items: action.payload.items,
        error: null
      }

    case PortfolioActionTypes.GET_PORTFOLIO_ERROR:
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default PortfolioReducer