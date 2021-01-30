import {
  POST_REQUEST,
  POST_SUCCESS,
  POST_ERROR,
} from './actionTypes';

export function postRequest() {
  return {
    type: POST_REQUEST,
  };
}

export function postSuccess(payload: any) {
  return {
    type: POST_SUCCESS,
    payload,
  };
}

export function postError(error: any) {
  return {
    type: POST_ERROR,
    error,
  };
}
