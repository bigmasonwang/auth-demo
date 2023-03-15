// 做煎饼的大妈
// 操作我们的煎饼
// 加鸡蛋
// 加葱花

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
};
// 点击登录按钮 -> 我要存放我的登录信息
// 点击登出按钮 -> 删掉登录信息
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const data = action.payload;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name = data;
    },
    logout: (state) => {
      state.name = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
