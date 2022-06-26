import { Button, Card } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import {
  DELETE_POST,
  Post as PostType,
  UPDATE_POST,
} from "../../redux/slices/post";
import { useAppDispatch } from "../../redux/store";

const Post: React.FC<PostType> = ({ id, title, userId, body }) => {
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState(false);
  const [updatedTitle, setTitle] = useState(title);
  const [updatedBody, setBody] = useState(body);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const HandleDelete = (userId: number, postId: number) =>
    dispatch(DELETE_POST({ id: postId }));
  const HandleEdit = (userId: number, postId: number) => {
    dispatch(
      UPDATE_POST({
        userId,
        id: postId,
        title: updatedTitle,
        body: updatedBody,
      })
    );
    setEdit(false);
  };

  useEffect(() => {
    edit && titleRef.current!.focus();
  }, [edit]);

  return (
    <Card variant="outlined" className="p-8 my-6 group">
      <h3
        contentEditable={edit}
        ref={titleRef}
        onBlur={(e) => setTitle(e.target.textContent || "")}
        className="text-3xl"
      >
        {title}
      </h3>
      <h4
        contentEditable={edit}
        onBlur={(e) => setBody(e.target.textContent || "")}
        className="text-xl"
      >
        {body}
      </h4>
      <p className="float-right">user: {userId}</p>
      <div
        className={`space-x-4 mt-4 ${
          edit ? "flex" : "hidden group-hover:flex"
        }`}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => (edit ? HandleEdit(userId, id) : setEdit(true))}
        >
          {edit ? "Save" : "Edit"}
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => HandleDelete(userId, id)}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default Post;
