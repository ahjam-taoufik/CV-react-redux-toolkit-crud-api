import { configureStore } from '@reduxjs/toolkit';

import commentsReducer from '../features/comments/commentSlice';
export const store = configureStore({
  reducer: {
     comments:commentsReducer,
  },
});
