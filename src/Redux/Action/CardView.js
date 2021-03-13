import axios from 'axios';
const Post_url ="http://localhost:3000/categories";
const Comment_url=" http://localhost:3000/comments";
const like_url="http://localhost:3000/likes";
const picture_url="http://localhost:3000/pictures";

export const ArtistPost = () => async (dispatch) => {
	try {
		dispatch({
			type: 'GET_ARTIST_POST',
			payload: {
				PostData:null
			},
		});

		const { data } = await axios.get(Post_url);
		dispatch({
			type: 'GET_ARTIST_POST',
			payload: {
				PostData:data
			},
		});
	} catch (error) {
		console.log(error)
	}
};
export const fetchComment = (id) => async (dispatch) => {
	try {
		dispatch({
			type: 'GET_COMMENT',
			payload: {
				CommentData:null
			},
		});

		const { data } = await axios.get(`${Comment_url}/?id=${id}`);
		dispatch({
			type: 'GET_COMMENT',
			payload: {
				CommentData:data
			},
		});
	} catch (error) {
		console.log(error)
	}
};
export const fetchLike = (id,user) => async (dispatch) => {
	try {
		dispatch({
			type: 'GET_LIKE',
			payload: {
				LikeData:null
			},
		});

		const { data } = await axios.get(`${like_url}/?postId=${id}&&userId=${user}`);
		dispatch({
			type: 'GET_LIKE',
			payload: {
				LikeData:data
			},
		});
	} catch (error) {
		console.log(error)
	}
};
export const fetchPicture = (id) => async (dispatch) => {
	try {
		dispatch({
			type: 'GET_PICTURE',
			payload: {
				PictureData:null
			},
		});

		const { data } = await axios.get(`${picture_url}/?postId=${id}`);
		dispatch({
			type: 'GET_PICTURE',
			payload: {
				PictureData:data
			},
		});
	} catch (error) {
		console.log(error)
	}
};