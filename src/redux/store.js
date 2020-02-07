import thunk from "redux-thunk"
import { createStore, applyMiddleware, combineReducers } from "redux"

import AchievementsReducer from "./achievements/AchievementsReducer"
import SkillsReducer from "./skills/SkillsReducer"
import PostsReducer from "./posts/PostsReducer"
import PortfolioReducer from "./portfolio/PortfolioReducer"
import ApplicationReducer from "./application/ApplicationReducer"
import saver from "./middleware/saver"
import defaultState from "./defaultState"

const initialState = localStorage.getItem('redux-store') ? JSON.parse(localStorage.getItem('redux-store')) : defaultState

const rootReducer = combineReducers({
  posts : PostsReducer,
  skills: SkillsReducer,
  portfolio : PortfolioReducer,
  application : ApplicationReducer,
  achievements: AchievementsReducer
})

const store = createStore(rootReducer, initialState, applyMiddleware(thunk, saver));

export default store;