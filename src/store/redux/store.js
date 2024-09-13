import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@features/User/AuthReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export default store;
