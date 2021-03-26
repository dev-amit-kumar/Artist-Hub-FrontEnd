import { base_url, configHeader } from "../config";
import axios from "axios";

export const fetchUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_USER_DETAIL",
      payload: {
        UserDetail: null,
        savedPost: null,
        followingDetail: null,
        followingCount: null,
      },
    });
    dispatch({ type: "TOGGLE_IS_LOADING_USER_PAGE" });

    const { data: UserDetail } = await axios.get(
      `${base_url}/artist/getDetails/${id}`,
      configHeader
    );
    const { data: savedPost } = await axios.get(
      `${base_url}/save/getAllSavedPost`,
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
      type: "GET_USER_DETAIL",
      payload: {
        UserDetail: UserDetail,
        savedPost: savedPost,
        followingDetail: followingDetail,
        followingCount: followingCount,
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({ type: "TOGGLE_IS_LOADING_USER_PAGE" });
  }
};
