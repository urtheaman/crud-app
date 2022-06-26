import { Button } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddPost from "./posts/AddPost";
import Dashboard from "./posts/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="create" element={<AddPost />} />
      <Route path="*" element={<div className="flex justify-center items-center min-h-[100vh] text-3xl">404 not found</div>} />
    </Routes>
  );
}

export default App;

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Dashboard />
      <div className="fixed bottom-10 right-10">
        <Button
          variant="contained"
          color="primary"
          className="p-4 text-2xl"
          onClick={() => navigate("create")}
        >
          Add Post
        </Button>
      </div>
    </div>
  );
}
