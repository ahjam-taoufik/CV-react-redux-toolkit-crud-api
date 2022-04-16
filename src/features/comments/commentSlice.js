import {
  createSlice,
   createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';


export const fetchComments=createAsyncThunk('comments/fetchComments',async(_,{dispatch})=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
    const data=await response.json();
    return data;
    });

const commentsAdapter=createEntityAdapter({
    selectId:comment=>comment.id,
})


const commentsSice=createSlice({ 
    name: 'comments',
    initialState: commentsAdapter.getInitialState({loading: false}),
    reducers:{},
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
         
    }
});


export default commentsSice.reducer