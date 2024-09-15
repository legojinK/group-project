import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setUpdateData } from "./animalSearchSlice";

const initialState = {
  selectedSido: "",
  selectedSigungu: "",
  selectedShelter: "",
  shelterList: [],
  searchedShelterList: [],
  updateData: false,
};

export const setShelterList = createAsyncThunk(
  "shelter/setShelterList",
  async (payload, thunkAPI) => {
    return payload;
  }
);

export const setSearchedShelterList = createAsyncThunk(
  "shelter/setSearchedShelterList",
  async (payload, thunkAPI) => {
    return payload;
  }
);

const shelterSlice = createSlice({
  name: "shelter",
  initialState,
  reducers: {
    setSelectedSido(state, action) {
      state.selectedSido = action.payload;
    },
    setSelectedSigungu(state, action) {
      state.selectedSigungu = action.payload;
    },
    setSelectedShelter(state, action) {
      state.selectedShelter = action.payload;
    },
    setUpdateData(state, action) {
      state.updateData = !state.updateData;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setShelterList.fulfilled, (state, action) => {
      state.shelterList = action.payload;
    });
    builder.addCase(setSearchedShelterList.fulfilled, (state, action) => {
      state.searchedShelterList = action.payload;
    });
  },
});

export const { setSelectedSido, setSelectedSigungu, setSelectedShelter } =
  shelterSlice.actions;

export default shelterSlice.reducer;
