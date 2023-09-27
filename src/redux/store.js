import { configureStore } from "@reduxjs/toolkit";
import photoReduser from "./photosSlice";

export default configureStore({
  reducer: {
    photoState: photoReduser,
  },
});
