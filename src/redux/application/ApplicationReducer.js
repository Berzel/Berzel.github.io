import ApplicationActionTypes from "./ApplicationActionTypes"

const initialState = {
  loading : true,
  error : null
}

const ApplicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ApplicationActionTypes.APPLICATION_LOADING :
      return {
        ...state,
        loading: true,
        error: null
      }
    
    case ApplicationActionTypes.APPLICATION_LOADED :
      return {
        ...state,
        loading : false,
        error : null
      }
    
    case ApplicationActionTypes.APPLICATION_LOAD_ERROR :
      return {
        ...state,
        error : action.payload.error
      }
    
    default :
      return state
  }
}

export default ApplicationReducer