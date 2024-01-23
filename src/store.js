import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./reducers/menuReducer";

export default configureStore({
  reducer: {
    menu: menuReducer.reducer,
  },
});
