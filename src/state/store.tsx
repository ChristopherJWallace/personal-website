// Creates and configures store to hold variables

import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index";

export const store = configureStore({
  reducer: reducers
});


