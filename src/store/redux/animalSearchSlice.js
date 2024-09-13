import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDateFrom: "",
  selectedDateTo: "",
  selectedSido: "",
  selectedSigungu: "",
  selectedShelter: "",
  selectedKind: "",
  selectedDetailKind: "",
  selectedNeuter: "",
  updateData: false,
  totalCount: 0,
};

const animalSearchSlice = createSlice({
  name: "animalSearch",
  initialState,
  reducers: {
    setSelectedDateFrom(state, action) {
      state.selectedDateFrom = action.payload;
    },
    setSelectedDateTo(state, action) {
      state.selectedDateTo = action.payload;
    },
    setSelectedSido(state, action) {
      state.selectedSido = action.payload;
    },
    setSelectedSigungu(state, action) {
      state.selectedSigungu = action.payload;
    },
    setSelectedShelter(state, action) {
      state.selectedShelter = action.payload;
    },
    setSelectedKind(state, action) {
      state.selectedKind = action.payload;
    },
    setSelectedDetailKind(state, action) {
      state.selectedDetailKind = action.payload;
    },
    setSelectedNeuter(state, action) {
      state.selectedNeuter = action.payload;
    },
    // 조회 버튼 클릭 시, redux:updateData 토글
    setUpdateData(state) {
      state.updateData = !state.updateData;
    },
    setTotalCount(state, action) {
      state.totalCount = action.payload;
    },
    setPageNo(state, action) {
      state.pageNo = action.payload;
    }
  },
});

export const {
  setSelectedDateFrom,
  setSelectedDateTo,
  setSelectedSido,
  setSelectedSigungu,
  setSelectedShelter,
  setSelectedKind,
  setSelectedDetailKind,
  setSelectedNeuter,
  setUpdateData,
  setTotalCount,
  setPageNo,
} = animalSearchSlice.actions;

export default animalSearchSlice.reducer;