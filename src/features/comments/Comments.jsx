import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentsSelectors, fetchComments } from './commentSlice';
import Comment from './components/Comment';

const Comments = () => {
  const dispatch = useDispatch();
  const getAllComments = useSelector(commentsSelectors.selectAll);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return getAllComments.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));
};
export default Comments;
