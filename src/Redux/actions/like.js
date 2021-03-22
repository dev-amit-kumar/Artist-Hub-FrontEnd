import { base_url } from '../config';
import axios from 'axios';
const configHeader = {
	headers: {
		'Content-Type': 'application/json',
		'auth-token': localStorage.getItem('auth-token'),
	},
};

export const likePost = (postId, callback) => {
	try {
		axios
			.get(`${base_url}/like/manageLike/${postId}`, configHeader)
			.then((reply) => {
				if (reply.data.status === 200) {
					callback(reply.data);
				} else {
					callback(false);
				}
			})
			.catch((err) => callback(false));
	} catch (error) {
		callback(false);
	}
};
