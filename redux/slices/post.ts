import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
interface State {
  posts: Post[];
  isLoading: boolean;
}
const postsSlice = createSlice({
  name: "posts",
  initialState: { posts: [], isLoading: false } as State,
  reducers: {
    FETCH_POSTS: (state: State) => {
      state.isLoading = true;
    },
    setPosts: (state: State, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    CREATE_POST: (state: State, action: PayloadAction<Post>) => {},
    createPost: (state: State, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    UPDATE_POST: (state: State, action: PayloadAction<Post>) => {},
    updatePost: (state: State, action: PayloadAction<Post>) => {
      const { userId, id } = action.payload;
      const index = state.posts.findIndex(
        (post) => post.userId === userId && post.id === id
      );
      state.posts[index] = action.payload;
    },
    DELETE_POST: (state: State, action: PayloadAction<{ id: number }>) => {},
    deletePost: (state: State, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const index = state.posts.findIndex((post) => post.id === id);
      state.posts.splice(index, 1);
    },
  },
});

const { actions, reducer: PostsReducer } = postsSlice;
export default PostsReducer;
export const {
  setPosts,
  createPost,
  deletePost,
  FETCH_POSTS,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  updatePost,
} = actions;
