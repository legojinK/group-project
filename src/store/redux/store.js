import { configureStore } from "@reduxjs/toolkit";
import animalSearchReducer from "./animalSearchSlice";

const store = configureStore({
  reducer: {
    animalSearch: animalSearchReducer,
  },
});

export default store;