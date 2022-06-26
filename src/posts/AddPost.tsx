import { Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CREATE_POST } from "../../redux/slices/post";
import { useAppDispatch } from "../../redux/store";

const AddPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = (data: any) => dispatch(CREATE_POST(data));

  return (
    <Container maxWidth="md">
      <Typography variant="h3" marginY={8}>
        Create New Post
      </Typography>
      {/* @ts-ignore */}
      <form
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="p-4 rounded-md text-xl outline outline-1"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        <input
          className="p-4 rounded-md text-xl outline outline-1"
          placeholder="User Id"
          type='number'
          {...register("userId", { required: true })}
        />
        <textarea
          className="p-4 rounded-md text-xl outline outline-1"
          placeholder="Body"
          {...register("body", { required: true })}
        />
        {(errors.title || errors.body || errors.userId) && (
          <span>Please fill all the fields.</span>
        )}
        <input
          type="submit"
          className="p-4 cursor-pointer ring ring-blue-400 bg-blue-400 text-xl text-white rounded-md"
          value="Create Post"
        />
      </form>
      <button
        className="p-4 mt-4 cursor-pointer ring ring-blue-400 w-full hover:bg-blue-400 text-xl text-blue-400 hover:text-white rounded-md"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </Container>
  );
};

export default AddPost;
