import PostActionTypes from "./PostActionTypes"
import axios from 'axios'

export const onPostCreated = post => ({
  type: PostActionTypes.CREATE_POST_START,
  payload: {
    post
  }
})

export const onPostSaved = post => ({
  type: PostActionTypes.CREATE_POST_END,
  payload: {
    post
  }
})

export const onPostSaveError = error => ({
  type: PostActionTypes.CREATE_POST_ERROR,
  payload: {
    error
  }
})

export const createPost = (post) => {
  return dispatch => {
    dispatch(onPostCreated(post))

    // TODO: Make http call to create the achievement in remote db

    dispatch(onPostSaved(post))
  }
}

export const onGetPosts = () => ({
  type: PostActionTypes.GET_POSTS_START
})

export const onGetPostsSuccess = posts => ({
  type: PostActionTypes.GET_POSTS_END,
  payload: {
    posts
  }
})

export const onGetPostsError = error => ({
  type: PostActionTypes.GET_POSTS_ERROR,
  payload: {
    error
  }
})

export const getPosts = () => {
  return dispatch => {
    dispatch(onGetPosts())
    axios.get('http://localhost:3030/posts')
      .then(response => dispatch(onGetPostsSuccess(response.data)))
      .catch(err => dispatch(onGetPostsError(err)))
  }
}