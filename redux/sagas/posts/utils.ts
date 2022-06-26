import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import {
  createPost,
  deletePost,
  Post,
  setPosts,
  updatePost,
} from "../../slices/post";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export function* fetchData() {
  const res: Response = yield call(() =>
    fetch(BASE_URL, {
      method: "GET",
    })
  );
  const data: Post[] = yield res.json();
  yield put(setPosts(data.slice(10, 20)));
}

export function* deleteData(action: PayloadAction<{ id: number }>) {
  const res: Response = yield call(() =>
    fetch(`${BASE_URL}/${action.payload.id}`, {
      method: "DELETE",
    })
  );
  const data: {} = yield res.json();
  yield put(deletePost({ id: action.payload.id }));
  JSON.stringify(data) === "{}" && alert("delete success");
}

export function* updateData(action: PayloadAction<Post>) {
  const res: Response = yield call(() =>
    fetch(`${BASE_URL}/${action.payload.id}`, {
      method: "PUT",
      body: JSON.stringify(action.payload),
    })
  );
  const data: { id: number } = yield res.json();
  yield put(updatePost(action.payload));
  data.id && alert("update success");
}

export function* createData(action: PayloadAction<Post>) {
  const res: Response = yield call(() =>
    fetch(`${BASE_URL}`, {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
  );
  const data: Post = yield res.json();
  yield put(createPost(data));
  data && alert("create success");
}
