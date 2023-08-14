import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good thing",
  },
  {
    id: "2",
    title: "Learning Tailwind Css",
    content: "It is good css library",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
      //acctually your are not mutating state it's happening because of immer js
    },
  },
});

console.log("postSlice ==>", postsSlice);

export const selectAllPosts = (state) => state.posts;
console.log("state ==>", selectAllPosts);

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
