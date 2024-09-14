import { configureStore } from "@reduxjs/toolkit";
import animalSearchReducer from "./animalSearchSlice";
import authReducer from "@store/redux/AuthSlice";
import favoritesReducer from "@store/redux/favoritesSlice";

const store = configureStore({
  reducer: {
    animalSearch: animalSearchReducer,
    auth: authReducer,
    favorites: favoritesReducer,
  },
});

export default store;