import api from "../utils/api";

import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from "./types";

// Get Posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await api.get("posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// ADD like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await api.put(`posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: {
        id,
        likes: res.data,
      },
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.msg,
        status: error.response.status,
      },
    });
  }
};

//REMOVE like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await api.put(`posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: {
        id,
        likes: res.data,
      },
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.msg,
        status: error.response.status,
      },
    });
  }
};
