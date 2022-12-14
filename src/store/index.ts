import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { configsSlice } from "./slices/config";

const store = configureStore({
  reducer: {
    configs: configsSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
