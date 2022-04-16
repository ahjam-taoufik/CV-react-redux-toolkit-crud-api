
import React, { useEffect,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentsSelectors, fetchComments, deleteComments, patchComment } from './commentSlice';
import Comment from './components/Comment';

const Comments = () => {
  const dispatch = useDispatch();
  const getAllComments = useSelector(commentsSelectors.selectAll);


 const onDelete=useCallback((id1)=>{
  // dispatch(deleteComments(id)).then((data)=>console.log(data))
  return dispatch(deleteComments(id1))  //if you need to work with promise (then) in children component, you can return the value 
                                       //of promise and then use it in the children component                                      
},[dispatch])



const onPatch=useCallback((id,newObj)=>{
 return dispatch(patchComment({ id,newObj}))  
                                                                            
},[dispatch])





  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return getAllComments.map(({id,body}) => (
    <Comment key={id} id={id} body={body} onDelete={onDelete} onPatch={onPatch} />
  ));
};
export default Comments;
