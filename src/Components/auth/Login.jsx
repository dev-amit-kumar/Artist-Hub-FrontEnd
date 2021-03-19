import React, { useState } from 'react';
import axios from 'axios';
import { base_url } from '../../redux/config';

const Login = () => {
	const [L_email, setLEmail] = useState('');
	const [L_password, setLPassword] = useState('');
	const [L_error, setLError] = useState('');
	const [L_msg, setLMsg] = useState('');

	const LoginHandler = (e) => {
		e.preventDefault();
		var data = {
			email: L_email,
			password: L_password,
		};
		axios.post(`${base_url}/auth/loginUser`, data).then((reply) => {
			if (reply.data.status === 400) {
				setLMsg('');
				setLError(reply.data.error);
			} else if (reply.data.status === 200) {
				setLError('');
				setLMsg(reply.data.message);
				if (reply.data.token) {
					localStorage.setItem('auth-token', reply.data.token);
				}
			}
		});
	};

	return (
		<div className="container-fluid">
			<div className="card" style={{ width: '400px' }}>
				<h4 className="card-header text-center">Login Form</h4>
				<div className="card-body">
					<form onSubmit={LoginHandler}>
						<div className="form-group mt-2">
							<label>Email</label>
							<input
								type="email"
								placeholder="Enter the email"
								className="form-control"
								value={L_email}
								onChange={(e) => setLEmail(e.target.value)}
							/>
						</div>
						<div className="form-group mt-2">
							<label>Password (min 6 character)</label>
							<input
								type="password"
								className="form-control"
								placeholder="Enter the email"
								value={L_password}
								onChange={(e) => setLPassword(e.target.value)}
							/>
						</div>
						<div className="form-group mt-2">
							<button type="submit" className="btn btn-success">
								Login
							</button>
							<p className="text-danger">{L_error}</p>
							<p className="text-info">{L_msg}</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
