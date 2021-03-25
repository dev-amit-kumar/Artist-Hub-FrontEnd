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
			.catch(() => callback(false));
	} catch (error) {
		callback(false);
	}
};

export const getComment = (postId, callback) => {
	try {
		axios
			.get(`${base_url}/comment/getComments/${postId}`, configHeader)
			.then((reply) => {
				if (reply.data.status === 200) {
					callback(reply.data);
				} else {
					callback(false);
				}
			})
			.catch(() => callback(false));
	} catch (error) {
		callback(false);
	}
};

export const getRatings = (postId, callback) => {
	try {
		axios
			.get(`${base_url}/rating/getRatings/${postId}`, configHeader)
			.then((reply) => {
				if (reply.data.status === 200) {
					callback(reply.data);
				} else {
					callback(false);
				}
			})
			.catch(() => callback(false));
	} catch (error) {
		callback(false);
	}
};

export const addNewComment = (postId, comment, callback) => {
	try {
		axios
			.post(
				`${base_url}/comment/addComment/${postId}`,
				{
					comment: comment,
				},
				configHeader,
			)
			.then((reply) => {
				if (reply.data.status === 200) {
					callback(reply.data.data);
				} else {
					callback(false);
				}
			})
			.catch(() => callback(false));
	} catch (error) {
		callback(false);
	}
};

export const addNewRating = (postId, rating, callback) => {
	try {
		axios
			.get(
				`${base_url}/rating/addRating/${postId}?rating=${rating}`,
				configHeader,
			)
			.then((reply) => {
				console.log(reply.data);
				if (reply.data.status === 200) {
					callback(reply.data);
				} else {
					callback(false, reply.data.message);
				}
			})
			.catch(() => callback(false));
	} catch (error) {
		callback(false);
	}
};

export const savePost = (postId, callback) => {
	try {
		axios
			.get(`${base_url}/save/manageSave/${postId}`, configHeader)
			.then((reply) => {
				console.log(reply.data);
				if (reply.data.status === 200) {
					callback(reply.data);
				} else {
					callback(false, reply.data.message);
				}
			})
			.catch(() => callback(false));
	} catch (error) {
		callback(false);
	}
};
