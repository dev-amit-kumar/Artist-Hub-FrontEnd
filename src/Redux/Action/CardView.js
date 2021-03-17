import axios from "axios";
const url = "https://artist-hub-api.herokuapp.com";
const Post_url = "https://artist-hub-api.herokuapp.com/post/getAllPost";
const Comment_url = "https://artist-hub-api.herokuapp.com/comment/getComments/";
const like_url = "/like/getLikes/604d96e3f32aac0015d314d8";
const like_count_url =
  "https://artist-hub-api.herokuapp.com/like/getlikeCounts/";
const picture_url = "/image/getImages";
const coment_count_url = "/comment/getCommentsCounts";

const configHeader = {
  headers: {
    "Content-Type": "application/json",
    "auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTBkMmMxMzg0OGRiMDAxNTI4N2Q0YyIsImlhdCI6MTYxNTkwOTU4NCwiZXhwIjoxNjE1OTk1OTg0fQ.xmJYG3N0Z7CA28bFb5zJkaMMnY3GHLEZ2h1P1ZzYyFY",
  },
};

export const ArtistPost = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_ARTIST_POST",
      payload: {
        PostData: null,
      },
    });

    const { data } = await axios.get(Post_url, configHeader);
    dispatch({
      type: "GET_ARTIST_POST",
      payload: {
        PostData: data,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const fetchAllData = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_ALL_DATA",
      payload: {
        CommentData: null,
        LikeData: null,
        likeCount: null,
        CommentCount: null,
        PictureData: null,
      },
    });

    const { data: comment } = await axios.get(
      `${Comment_url}${id}`,
      configHeader
    );
    const { data: like } = await axios.get(`${url}${like_url}`, configHeader);
    const { data: likeCount } = await axios.get(
      `${like_count_url}${id}`,
      configHeader
    );
    const { data: commentCount } = await axios.get(
      `${url}${coment_count_url}/${id}`,
      configHeader
    );
    const { data: picture } = await axios.get(
      `${url}${picture_url}/${id}`,
      configHeader
    );
    dispatch({
      type: "GET_ALL_DATA",
      payload: {
        CommentData: comment,
        LikeData: like,
        LikeCount: likeCount,
        CommentCount: commentCount,
        PictureData: picture,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
