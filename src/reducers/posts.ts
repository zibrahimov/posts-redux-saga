import { fromJS } from 'immutable';
import {
  POST_REQUEST,
  POST_SUCCESS,
  POST_ERROR,
} from '../actions/actionTypes';

const initialState = fromJS({
  posts: [],
  loading: false,
  error: null,
});

const posts = (state = initialState, { type, payload }: Posts) => {
  switch (type) {
    case POST_REQUEST:
      return state
        .setIn(['loading'], true)
        .setIn(['error'], false);
    case POST_SUCCESS:
      return state
      .setIn(['loading'], false)
      .setIn(['error'], false)
      .setIn(['posts'], payload);
    case POST_ERROR:
      return state
      .setIn(['loading'], false)
      .setIn(['error'], payload);
    default:
      return state;
  }
};

interface Posts {
  type: string;
  payload: any;
};

export default posts;
