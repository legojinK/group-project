import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 설정
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loginError: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const user = action.payload;
      state.user = user;
      state.success = true;
      localStorage.setItem("user", JSON.stringify(user)); // 유저 정보 로컬 스토리지에 저장
      console.log("user:", JSON.stringify(user));
    },
    logout(state) {
      state.user = null;
      state.success = false;
      localStorage.removeItem("user"); // 유저 정보 제거
    },
    setLoginError(state, action) {
      state.loginError = action.payload; // 에러 메시지 설정
    },
    clearErrors(state) {
      state.loginError = null;
    },
  },
});

export const { login, logout, setLoginError, clearErrors } = authSlice.actions;
export default authSlice.reducer;
