import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "./blogs";
import blogSlice from "./blog";

const store = configureStore({
  reducer: {
    Blogs: blogsSlice,
    Blog: blogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
