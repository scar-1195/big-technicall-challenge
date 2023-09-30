import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from './tasksSlice';

export const store = configureStore({
  reducer: {
    taskReducer: tasksSlice.reducer,
  },
});
