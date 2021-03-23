import { base_url, configHeader } from "../config";
import axios from "axios";

export const fetchArtist = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_ARTIST_DETAIL",
      payload: {
        ArtistDetail: null,
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
        followingDetail: followingDetail,
        followerDetail: follower,
        followingCount: followingCount,
        followerCount: followerCount,
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({ type: "TOGGLE_IS_LOADING_ARTIST_PAGE" });
  }
};

export const fetchPost = (id, page) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_POST_DETAIL",
      payload: {
        Post: null,
      },
    });
    dispatch({ type: "TOGGLE_IS_LOADING_POST_PAGE" });

    const { data } = await axios.get(
      `${base_url}/artist/${page}/${id}`,
      configHeader
    );
    dispatch({
      type: "GET_POST_DETAIL",
      payload: {
        Post: data,
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({ type: "TOGGLE_IS_LOADING_POST_PAGE" });
  }
};
