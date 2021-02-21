/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchPostSuccess, fetchPostError, createPostSuccess, createPostError } from '../actions/actionCreators';
import { CREATE_POST_REQUEST, FETCH_POST_REQUEST } from '../actions/actionTypes';
import cogoToast from 'cogo-toast';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const fetchPostsApi = () => axios.get(BASE_URL);
const createPostApi = (payload) => axios.post(BASE_URL, {
  title: payload.title,
  body: payload.body,
  userId: 1,
})
.then(response => response)
.catch(error => error);

function* fetchPosts() {
  try {
    const response = yield call(fetchPostsApi);
    yield put(fetchPostSuccess(response.data));
  } catch (error) {
    yield put(fetchPostError(error));
  }
}

function* createPost({ payload }: any) {
  try {
    const response = yield call(createPostApi, payload);
    yield put(createPostSuccess(response.data));
    yield call(cogoToast.success, 'Success');
  } catch (error) {
    yield put(createPostError(error));
  }
}

export default [
  takeLatest(FETCH_POST_REQUEST, fetchPosts),
  takeLatest(CREATE_POST_REQUEST, createPost),
];

export const _testable = {
  fetchPostsApi,
  fetchPosts,
  createPostApi,
  createPost,
};
