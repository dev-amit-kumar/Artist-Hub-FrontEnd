import { base_url } from '../config';
import axios from 'axios';

export const registerUser = (data) => (dispatch) => {
	try {
		dispatch({ type: 'TOGGLE_IS_LOADING_AUTH_USER' });
		dispatch({ type: 'REGISTER_ERROR', payload: null });
		dispatch({ type: 'REGISTER_MSG', payload: null });
		axios
			.post(`${base_url}/auth/registerUser`, data)
			.then((reply) => {
				if (reply.data.status === 200) {
					dispatch({
						type: 'REGISTER_MSG',
						payload: reply.data.message,
					});
				} else if (reply.data.status === 300) {
					dispatch({
						type: 'REGISTER_ERROR',
						payload: reply.data.message,
					});
				} else if (reply.data.status === 400) {
					dispatch({
						type: 'REGISTER_ERROR',
						payload: reply.data.error,
					});
				} else {
					dispatch({
						type: 'REGISTER_ERROR',
						payload: 'Something went wrong',
					});
				}
			})
			.catch((err) => dispatch({ type: 'REGISTER_ERROR', payload: err }));
	} catch (error) {
		dispatch({ type: 'REGISTER_ERROR', payload: error });
	} finally {
		dispatch({ type: 'TOGGLE_IS_LOADING_AUTH_USER' });
	}
};

export const loginUser = (data) => (dispatch) => {
	try {
		dispatch({ type: 'TOGGLE_IS_LOADING_AUTH_USER' });
		dispatch({ type: 'LOGIN_ERROR', payload: null });
		dispatch({ type: 'LOGIN_MSG', payload: null });
		axios
			.post(`${base_url}/auth/loginUser`, data)
			.then((reply) => {
				if (reply.data.status === 200) {
					dispatch({
						type: 'LOGIN_MSG',
						payload: reply.data.message,
					});
					if (reply.data.token) {
						localStorage.setItem('auth-token', reply.data.token);
						dispatch({ type: 'SET_USER', payload: reply.data });
					}
				} else if (reply.data.status === 300) {
					dispatch({
						type: 'LOGIN_ERROR',
						payload: reply.data.message,
					});
				} else if (reply.data.status === 400) {
					dispatch({
						type: 'LOGIN_ERROR',
						payload: reply.data.error,
					});
				} else {
					dispatch({
						type: 'LOGIN_ERROR',
						payload: 'Something went wrong',
					});
				}
			})
			.catch((err) => dispatch({ type: 'LOGIN_ERROR', payload: err }));
	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', payload: error });
	} finally {
		dispatch({ type: 'TOGGLE_IS_LOADING_AUTH_USER' });
	}
};

export const logoutUser = () => (dispatch) => {
	try {
		dispatch({ type: 'TOGGLE_IS_LOADING_AUTH_USER' });
		localStorage.clear();
	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', payload: error });
	} finally {
		dispatch({ type: 'TOGGLE_IS_LOADING_AUTH_USER' });
	}
};
