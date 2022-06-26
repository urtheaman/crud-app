import { takeLatest, takeEvery, all } from "redux-saga/effects";
import { fetchData, deleteData, updateData, createData } from "./utils";

export function* fetchPostsSaga() {
  yield takeLatest("posts/FETCH_POSTS", fetchData);
}

export function* deletePostSaga() {
  yield takeEvery("posts/DELETE_POST", deleteData);
}

export function* updatePostSaga() {
  yield takeEvery("posts/UPDATE_POST", updateData);
}

export function* createPostSaga() {
  yield takeEvery("posts/CREATE_POST", createData);
}

export default function* rootSaga() {
  yield all([fetchPostsSaga(), deletePostSaga(), updatePostSaga(), createPostSaga()]);
}
