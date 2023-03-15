// 小吃街
// 煎饼摊: 大妈
// 油条摊: 大叔

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
