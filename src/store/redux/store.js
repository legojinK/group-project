import { configureStore } from "@reduxjs/toolkit";
import animalSearchReducer from "./animalSearchSlice";
import authReducer from "@features/User/AuthReducer";

const store = configureStore({
  reducer: {
    animalSearch: animalSearchReducer,
    auth: authReducer,
  },
});

export default store;