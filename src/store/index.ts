import { configureStore } from '@reduxjs/toolkit';
import travelReducer from './travelSlice';

const store = configureStore({
  reducer: {
    travel: travelReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;