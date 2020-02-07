import SkillActionTypes from "./SkillActionTypes"
import axios from 'axios'

export const onSkillCreated = skill => ({
  type : SkillActionTypes.CREATE_SKILL_START,
  payload : {
    skill
  }
})

export const onSkillSaved = skill => ({
  type : SkillActionTypes.CREATE_SKILL_END,
  payload : {
    skill
  }
})

export const onSkillSaveError = error => ({
  type : SkillActionTypes.CREATE_SKILL_ERROR,
  payload : {
    error
  }
})

export const createSkill = (skill) => {
  return dispatch => {
    dispatch(onSkillCreated(skill))

    // TODO: Make http call to create the achievement in remote db

    dispatch(onSkillSaved(skill))
  }
}

export const onGetSkills = () => ({
  type: SkillActionTypes.GET_SKILLS_START
})

export const onGetSkillsSuccess = skills => ({
  type: SkillActionTypes.GET_SKILLS_END,
  payload:{
    skills
  }
})

export const onGetSkillsError = error => ({
  type: SkillActionTypes.GET_SKILLS_ERROR,
  payload: {
    error
  }
})

export const getSkills = () => {
  return dispatch => {
    dispatch(onGetSkills())
    axios.get('http://localhost:3030/skills')
      .then(response => dispatch(onGetSkillsSuccess(response.data)))
      .catch(err => dispatch(onGetSkillsError(err)))
  }
}