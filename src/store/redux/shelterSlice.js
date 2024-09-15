import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSido: "",
  selectedSigungu: "",
  selectedShelter: "",
  shelterList: [],
};

export const setShelterList = createAsyncThunk(
  "shelter/setShelterList",
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
  },
  extraReducers: (builder) => {
    builder.addCase(setShelterList.fulfilled, (state, action) => {
      state.shelterList = action.payload;
    });
  },
});

export const { setSelectedSido, setSelectedSigungu, setSelectedShelter } =
  shelterSlice.actions;

export default shelterSlice.reducer;
