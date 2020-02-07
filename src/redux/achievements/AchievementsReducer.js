import AchievementActionTypes from "./AchieventActionTypes"

const initialState = {
  data: [],
  error: null
}

const AchievementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AchievementActionTypes.CREATE_ACHIEVEMENT_START:
      return {
        ...state,
        data: state.data.concat(action.payload.achievement)
      }

    case AchievementActionTypes.CREATE_ACHIEVEMENT_END:
      return {
        ...state,
        error: null
      }

    case AchievementActionTypes.CREATE_ACHIEVEMENT_ERROR:
      return {
        ...state,
        error: action.payload.error
      }

    case AchievementActionTypes.GET_ACHIEVEMENTS_END:
      return {
        ...state,
        data: action.payload.achievements,
        error: null
      }
    
    case AchievementActionTypes.GET_ACHIEVEMENTS_ERROR:
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default AchievementsReducer