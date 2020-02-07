import SkillActionTypes from "./SkillActionTypes"

const initialState = {
  data: [],
  error: null
}

const SkillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SkillActionTypes.CREATE_SKILL_START:
      return {
        ...state,
        data: state.data.concat(action.payload.skill)
      }

    case SkillActionTypes.CREATE_SKILL_END:
      return {
        ...state,
        error: null
      }

    case SkillActionTypes.CREATE_SKILL_ERROR:
      return {
        ...state,
        error: action.payload.error
      }

    case SkillActionTypes.GET_SKILLS_END:
      return {
        ...state,
        data: action.payload.skills,
        error: null
      }

    case SkillActionTypes.GET_SKILLS_ERROR:
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default SkillsReducer