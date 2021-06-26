import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import logger from "redux-logger";
const configureAppStore = () => {
  const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger], //thunk
    devTool: process.env.NODE_ENV !== "production",
  });

  return store;
};

export default configureAppStore;
