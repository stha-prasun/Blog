import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogs";

const store = configureStore({
  reducer: {
    Blogs: blogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
