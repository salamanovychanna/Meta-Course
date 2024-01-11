import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./reducers/index.js";

export default configureStore({
  reducer: {
    menu: menuReducer.reducer,
  },
});
