import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
} from './actionTypes';

export function fetchPostRequest() {
  return {
    type: FETCH_POST_REQUEST,
  };
}

export function fetchPostSuccess(payload) {
  return {
    type: FETCH_POST_SUCCESS,
    payload,
  };
}

export function fetchPostError(error) {
  return {
    type: FETCH_POST_ERROR,
    error,
  };
}

export function createPostRequest(payload) {
  return {
    type: CREATE_POST_REQUEST,
    payload,
  };
}

export function createPostSuccess(payload) {
  return {
    type: CREATE_POST_SUCCESS,
    payload,
  };
}

export function createPostError(error) {
  return {
    type: CREATE_POST_ERROR,
    error,
  };
}
