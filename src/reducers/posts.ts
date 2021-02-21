import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
} from '../actions/actionTypes';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const posts = (state = initialState, { type, payload }: Posts) => {
  switch (type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_POST_SUCCESS:
      return {
        loading: false,
        error: null,
        posts: payload,
      }
    case FETCH_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    case CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      }
    case CREATE_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return state;
  }
};

interface Posts {
  type: string;
  payload: any;
};

export default posts;
