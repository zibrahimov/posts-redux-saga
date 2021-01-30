/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { postError, postSuccess } from '../actions/actionCreators';
import { POST_REQUEST } from '../actions/actionTypes';

const fetchPostsApi = () => axios.get('https://jsonplaceholder.typicode.com/posts');

function* fetchPosts() {
  try {
    const response = yield call(fetchPostsApi);
    yield put(postSuccess(response.data));
  } catch (error) {
    yield put(postError(error));
  }
}

export default [
  takeLatest(POST_REQUEST, fetchPosts),
];

export const _testable = {
  fetchPostsApi,
  fetchPosts,
};
