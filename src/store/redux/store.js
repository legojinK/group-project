import { combineReducers, configureStore } from "@reduxjs/toolkit";
import animalSearchReducer from "./animalSearchSlice";
import authReducer from "@store/redux/AuthSlice";
import favoritesReducer from "@store/redux/favoritesSlice";
import shelterReducer from "@store/redux/shelterSlice";

const rootReducer = combineReducers({
  animalSearch: animalSearchReducer,
  auth: authReducer,
  favorites: favoritesReducer,
  shelter: shelterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;