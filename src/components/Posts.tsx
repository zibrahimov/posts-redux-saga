/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRequest } from '../actions/actionCreators';
import { selectPosts } from '../store/selectors';
import LoadingPlaceholder from '../utils/LoadingPlaceholder';
import PostItem from './PostItem';

const Posts = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectPosts);
  const { posts, loading } = data.toJS()

  useEffect(() => {
    dispatch(postRequest());
  }, []);

  return (
    <LoadingPlaceholder isLoading={loading}>
      {posts.map((p: { id: number, title: string, body: string }) => <PostItem key={p.id} title={p.title} body={p.body} />)}
    </LoadingPlaceholder>
  );
}
export default Posts;
