import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
//   async (_, { dispatch }) => {
  async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments?_limit=10'
    );
    const data = await response.json();
    return data;
  }
);

export const deleteComments = createAsyncThunk(
  'comments/deleteComments',
  async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: 'DELETE',
    });
    return id;
  }
);

export const patchComment = createAsyncThunk(
  'comments/patchComments',
  async ({ id, newObj }) => {
    await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(newObj),
    });
    return { id: id, changes: newObj };
  }
);

const commentsAdapter = createEntityAdapter({
  selectId: (comment) => comment.id,
});

const commentsSice = createSlice({
  name: 'comments',
  initialState: commentsAdapter.getInitialState({ loading: false }),
  reducers: {
    //you can setAllComments to the reducer by Example:
    //-->setAllComments:commentsAdapter.setAll,
    //-->removeOneComments:commentsAdapter.removeOne,
    //-->addManyComments:commentsAdapter.addMany,
    //and dispatch it in the component like :
    //--> dispatch(setAllComments(data))
    //finaly export it in under like:
    //--> export {setAllComments,removeOneComments,addManyComments} = commentsSlice.actions;
  },
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.loading = true;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.loading = false;
      commentsAdapter.setAll(state, action.payload);
    },
    [fetchComments.rejected]: (state) => {
      state.loading = false;
    },
    [deleteComments.pending]: (state) => {
      state.loading = true;
    },
    [deleteComments.fulfilled]: (state, { payload: id }) => {
      state.loading = false;
      commentsAdapter.removeOne(state, id);
    },
    [deleteComments.rejected]: (state) => {
      state.loading = false;
    },
    [patchComment.pending]: (state) => {
      state.loading = true;
    },
    [patchComment.fulfilled]: (state, { payload }) => {
      state.loading = false;
      commentsAdapter.updateOne(state, {
        id: payload.id,
        changes: payload.changes,
      });
    },
    [patchComment.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const commentsSelectors = commentsAdapter.getSelectors(
  (state) => state.comments
);

export default commentsSice.reducer;
