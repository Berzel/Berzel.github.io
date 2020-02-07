import PostActionTypes from "./PostActionTypes"

const initialState = {
  data: [],
  error: null
}

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PostActionTypes.CREATE_POST_START:
      return {
        ...state,
        data: state.data.concat(action.payload.post)
      }

    case PostActionTypes.CREATE_POST_END:
      return {
        ...state,
        error: null
      }

    case PostActionTypes.CREATE_POST_ERROR:
      return {
        ...state,
        error: action.payload.error
      }

    case PostActionTypes.GET_POSTS_END:
      return {
        ...state,
        data: action.payload.posts,
        error: null
      }

    case PostActionTypes.GET_POSTS_ERROR:
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default PostsReducer