import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchComments } from './commentSlice';

const Comments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return <div>Comments</div>;
};

export default Comments;
