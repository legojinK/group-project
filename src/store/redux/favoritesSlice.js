import { createSlice } from "@reduxjs/toolkit";

const initFavoritesList = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

const saveFavoritesList = favorites => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const initialState = {
  favorites: initFavoritesList(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    updateFavorite(state, action) {
      const animal = action.payload;
      const index = state.favorites.findIndex(
        fav => fav.desertionNo === animal.desertionNo
      );
      if (index !== -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(animal);
      }
      saveFavoritesList(state.favorites);
    },
    clearFavorites(state) {
      state.favorites = [];
    },
    loadFavorites(state) {
      state.favorites = initFavoritesList();
    },
  },
});

export const { updateFavorite, clearFavorites, loadFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
