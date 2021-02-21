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

export function fetchPostSuccess(payload: any) {
  return {
    type: FETCH_POST_SUCCESS,
    payload,
  };
}

export function fetchPostError(error: any) {
  return {
    type: FETCH_POST_ERROR,
    error,
  };
}

export function createPostRequest(payload: any) {
  return {
    type: CREATE_POST_REQUEST,
    payload,
  };
}

export function createPostSuccess(payload: any) {
  return {
    type: CREATE_POST_SUCCESS,
    payload,
  };
}

export function createPostError(error: any) {
  return {
    type: CREATE_POST_ERROR,
    error,
  };
}
