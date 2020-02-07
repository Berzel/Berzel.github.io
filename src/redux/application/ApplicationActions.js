import ApplicationActionTypes from "./ApplicationActionTypes"
import { getAchievements } from "../achievements/AchievementActions"
import { getSkills } from "../skills/SkillActions"
import { getPosts } from "../posts/PostActions"
import { getPortfolioItems } from "../portfolio/PortfolioActions"

export const onApplicationLoading = () => ({
  type: ApplicationActionTypes.APPLICATION_LOADING
})

export const onApplicationLoaded = () => ({
  type: ApplicationActionTypes.APPLICATION_LOADED
})

export const onApplicationLoadError = error => ({
  type: ApplicationActionTypes.APPLICATION_LOAD_ERROR,
  payload: {
    error
  }
})

export const loadApplication = () => {
  return dispatch => {
    dispatch(onApplicationLoading())
    dispatch(getAchievements())
    dispatch(getSkills())
    dispatch(getPosts())
    dispatch(getPortfolioItems())
    
    setTimeout(() => {
      dispatch(onApplicationLoaded())
    }, 2000);
  }
}