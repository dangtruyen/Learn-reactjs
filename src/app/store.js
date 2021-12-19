import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../features/Auth/userSlice';
import counterReducer from '../features/Counter/counterSlice';

const rootReducer = {
  // all reducer
  counter: counterReducer,
  user: useReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
