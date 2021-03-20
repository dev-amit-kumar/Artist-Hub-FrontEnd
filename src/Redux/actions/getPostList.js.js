import { base_url } from '../config';
import axios from 'axios';
const configHeader = {
	headers: {
		'Content-Type': 'application/json',
		'auth-token': localStorage.getItem('auth-token'),
	},
};

export const getPostList = (post_url, page_no) => async (dispatch) => {
	try {
		dispatch({ type: 'TOGGLE_IS_LOADING_POST_LIST' });
		dispatch({ type: 'GET_POST_LIST_ERROR', payload: null });
		await axios
			.get(`${base_url}/${post_url}?page_no=${page_no}`, configHeader)
			.then((reply) => {
				if (reply.data.status === 200) {
					dispatch({
						type: 'GET_POST_LIST',
						payload: reply.data.data,
					});
				} else {
					dispatch({
						type: 'GET_POST_LIST_ERROR',
						payload: reply.data,
					});
				}
			})
			.catch((err) =>
				dispatch({ type: 'GET_POST_LIST_ERROR', payload: err }),
			);
	} catch (error) {
		dispatch({ type: 'GET_POST_LIST_ERROR', payload: error });
	} finally {
		dispatch({ type: 'TOGGLE_IS_LOADING_POST_LIST' });
	}
};
