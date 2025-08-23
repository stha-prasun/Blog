import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Blog {
  _id: string;
  title: string;
  blog: string;
  createdAt: string;
  updatedAt: string;
}

interface BlogState {
  blog: Blog[];
}

const initialState: BlogState = {
  blog: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlog: (state, action: PayloadAction<Blog[]>) => {
      state.blog = action.payload;
    },
  },
});

export const { setBlog } = blogSlice.actions;
export default blogSlice.reducer;
