import axios from 'axios';
const Post_url ="http://localhost:3000/categories";
const Comment_url=" http://localhost:3000/comments";
const like_url="http://localhost:3000/likes";

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
export const fetchComment = () => async (dispatch) => {
	try {
		dispatch({
			type: 'GET_COMMENT',
			payload: {
				CommentData:null
			},
		});

		const { data } = await axios.get(Comment_url);
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
export const fetchLike = () => async (dispatch) => {
	try {
		dispatch({
			type: 'GET_LIKE',
			payload: {
				LikeData:null
			},
		});

		const { data } = await axios.get(like_url);
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