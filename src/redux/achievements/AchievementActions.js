import AchievementActionTypes from "./AchieventActionTypes"
import axios from "axios"

export const onAchievementCreated = achievement => ({
  type : AchievementActionTypes.CREATE_ACHIEVEMENT_START,
  payload : {
    achievement
  }
})

export const onAchievementSaved = achievement => ({
  type : AchievementActionTypes.CREATE_ACHIEVEMENT_END,
  payload : {
    achievement
  }
})

export const onAchievementSaveError = error => ({
  type : AchievementActionTypes.CREATE_ACHIEVEMENT_ERROR,
  payload : {
    error
  }
})

export const createAchievement = (achievement) => {
  return dispatch => {
    dispatch(onAchievementCreated(achievement))

    // TODO: Make http call to create the achievement in remote db

    dispatch(onAchievementSaved(achievement))
  }
}

export const onGetAchievements = () => ({
  type: AchievementActionTypes.GET_ACHIEVEMENTS_START
})

export const onGetAchievementsSuccess = achievements => ({
  type: AchievementActionTypes.GET_ACHIEVEMENTS_END,
  payload:{
    achievements
  }
})

export const onGetAchievementsError = error => ({
  type: AchievementActionTypes.GET_ACHIEVEMENTS_ERROR,
  payload: {
    error
  }
})

export const getAchievements = () => {
  return dispatch => {
    dispatch(onGetAchievements())
    axios.get('http://localhost:3030/achievements')
      .then(response => dispatch(onGetAchievementsSuccess(response.data)))
      .catch(err => dispatch(onGetAchievementsError(err)))
  }
}