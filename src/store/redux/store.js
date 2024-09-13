import { configureStore } from "@reduxjs/toolkit";
import animalSearchReducer from "./animalSearchSlice";
import authReducer from "@store/redux/AuthSlice";

const store = configureStore({
  reducer: {
    animalSearch: animalSearchReducer,
    auth: authReducer,
  },
});

export default store;