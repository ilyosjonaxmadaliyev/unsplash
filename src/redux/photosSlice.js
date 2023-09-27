import { createSlice } from "@reduxjs/toolkit";

const defaultValue = {
  query: "random",
};

const photosSlice = createSlice({
  name: "photos",
  initialState: defaultValue,
  reducers: {
    searchPhotos: (state, action) => {
      state.query = action.payload
    },
  },
});

export const { searchPhotos } = photosSlice.actions;
export default photosSlice.reducer;
