import { createSlice } from "@reduxjs/toolkit";
import { clearFavorites, loadFavorites } from "./favoritesSlice";

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
    },
    logout(state) {
      state.user = null;
      state.success = false;
      localStorage.removeItem("user");
    },
    setLoginError(state, action) {
      state.loginError = action.payload;
    },
    clearErrors(state) {
      state.loginError = null;
    },
  },
});

export const { login, logout, setLoginError, clearErrors } = authSlice.actions;

// 로그아웃 시 즐겨찾기 목록 초기화
export const logoutAndClearFavorites = () => (dispatch) => {
  dispatch(logout());
  dispatch(clearFavorites());
};

// 로그인 시 즐겨찾기 목록 불러오기
export const loginAndLoadFavorites = (user) => (dispatch) => {
  dispatch(login(user));
  dispatch(loadFavorites());
};

export default authSlice.reducer;
