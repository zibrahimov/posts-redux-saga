import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { fetchPostSuccess, fetchPostError, createPostSuccess } from '../actions/actionCreators';
import { _testable } from '../sagas/postSaga';
import { fakeFetchResponse, fakeInput, fakePostResponse } from './mock/posts';

const { fetchPosts, fetchPostsApi, createPostApi, createPost } = _testable;

describe('fetchPosts', () => {
  it('fetches posts and dispatches success', () =>
    expectSaga(fetchPosts)
      .provide([
        [call.fn(fetchPostsApi), fakeFetchResponse],
      ])
      .put(fetchPostSuccess(fakeFetchResponse.data))
      .run());

  it('handles errors', () => {
    const error = new Error('error');
    return expectSaga(fetchPosts)
      .provide([
        [call.fn(fetchPostsApi), throwError(error)],
      ])
      .call.fn(fetchPostsApi)
      .put(fetchPostError(error))
      .run();
  });
});

describe('createPost', () => {
  it('creates post and dispatches success', () =>
    expectSaga(createPost, fakeInput)
      .provide([
        [call.fn(createPostApi), fakePostResponse],
      ])
      .put(createPostSuccess(fakePostResponse))
      // .call(cogoToast.success, 'Success'))
      .run());
});
