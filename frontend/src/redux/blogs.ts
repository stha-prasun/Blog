import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Blogs {
  _id: string;
  title: string;
  blog: string;
  createdAt: string;
  updatedAt: string;
}

interface BlogsState {
  blogs: Blogs[];
}

const initialState: BlogsState = {
  blogs: [],
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<Blogs[]>) => {
      state.blogs = action.payload;
    },
  },
});

export const { setBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;
