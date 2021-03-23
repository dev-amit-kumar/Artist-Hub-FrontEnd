import { base_url } from "../config";
import axios from "axios";
const configHeader = {
  headers: {
    "Content-Type": "application/json",
    "auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTE3MTY0YTg3NDI4MDAxNTdlODRkZCIsImlhdCI6MTYxNjQzMjI5OCwiZXhwIjoxNjE2NTE4Njk4fQ.TRS66ShvnOsYsoNJTjc5oat3M5WPu4Du2TGknjcs70s",
  },
};

export const fetchArtist = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_ARTIST_DETAIL",
      payload: {
        ArtistDetail: null,
        AllPost: null,
        PinnedPost: null,
        mostRatedPost: null,
        followingDetail: null,
        followerDetail: null,
        followingCount: null,
        followerCount: null,
      },
    });
    dispatch({ type: "TOGGLE_IS_LOADING_ARTIST_PAGE" });

    const { data: ArtistDetail } = await axios.get(
      `${base_url}/artist/getDetails/${id}`,
      configHeader
    );
    const { data: AllPost } = await axios.get(
      `${base_url}/artist/getAllPostByUser/${id}`,
      configHeader
    );
    const { data: PinnedPost } = await axios.get(
      `${base_url}/artist/getPinnedPostByUser/${id}`,
      configHeader
    );
    const { data: mostRatedPost } = await axios.get(
      `${base_url}/artist/getMostRatedPostByUserId/${id}`,
      configHeader
    );
    const { data: follower } = await axios.get(
      `${base_url}/follower/getFollowerList/${id}`,
      configHeader
    );
    const { data: followerCount } = await axios.get(
      `${base_url}/follower/getFollowerCount/${id}`,
      configHeader
    );
    const { data: followingDetail } = await axios.get(
      `${base_url}/follower/getFollowingList/${id}`,
      configHeader
    );
    const { data: followingCount } = await axios.get(
      `${base_url}/follower/getFollowingCount/${id}`,
      configHeader
    );
    dispatch({
      type: "GET_ARTIST_DETAIL",
      payload: {
        ArtistDetail: ArtistDetail,
        AllPost: AllPost,
        PinnedPost: PinnedPost,
        MostRatedPost: mostRatedPost,
        followingDetail: followingDetail,
        followerDetail: follower,
        followingCount: followingCount,
        followerCount: followerCount,
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({ type: "TOGGLE_IS_LOADING_FOLLOW" });
  }
};
