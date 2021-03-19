import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions';
import { Redirect } from 'react-router';

const Login = (props) => {
	const [L_email, setLEmail] = useState('');
	const [L_password, setLPassword] = useState('');

	const LoginHandler = (e) => {
		e.preventDefault();
		var data = {
			email: L_email,
			password: L_password,
		};

		props.loginUser(data);
	};

	if (!props.user) {
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
									onChange={(e) =>
										setLPassword(e.target.value)
									}
								/>
							</div>
							<div className="form-group mt-2">
								{props.isLoadingUserAuth ? (
									<button
										className="btn btn-primary"
										type="button"
										disabled
									>
										<span
											className="spinner-border spinner-border-sm"
											role="status"
											aria-hidden="true"
										></span>
										Loading...
									</button>
								) : (
									<button
										type="submit"
										className="btn btn-success"
									>
										Login
									</button>
								)}
								<p className="text-danger">
									{props.loginError}
								</p>
								<p className="text-info">{props.loginMsg}</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	} else {
		return <Redirect to="/"></Redirect>;
	}
};

const mapStateToProps = (state) => {
	return {
		user: state.UserAuth.user,
		loginError: state.UserAuth.loginError,
		loginMsg: state.UserAuth.loginMsg,
		isLoadingUserAuth: state.UserAuth.isLoadingUserAuth,
	};
};

export default connect(mapStateToProps, { loginUser })(Login);
