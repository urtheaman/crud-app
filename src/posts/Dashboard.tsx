import { Container } from "@mui/material";
import { useEffect } from "react";
import { FETCH_POSTS } from "../../redux/slices/post";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Post from "./Post";

const Dashboard = () => {
  const posts = useAppSelector(({ posts }) => posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FETCH_POSTS());
  }, []);

  return (
    <div>
      {posts.isLoading && <div>Loading...</div>}
      {posts.posts.map((post) => (
        <Container key={post.id} maxWidth="sm">
          <Post {...post} />
        </Container>
      ))}
    </div>
  );
};

export default Dashboard;
