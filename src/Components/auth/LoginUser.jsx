import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import axios from 'axios';
const url = 'http://localhost:3000/auth';

const LoginForm = (props) => {
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
		axios.post(`${url}/loginuser`, data).then((reply) => {
			if (reply.data.status === 400) {
				setLMsg('');
				setLError(reply.data.error);
			} else if (reply.data.status === 200) {
				setLError('');
				setLMsg(reply.data.message);
				if (reply.data.token) {
					sessionStorage.setItem('auth-token', reply.data.token);
				}
			}
		});
	}

	if (!props.user) {
		return (
			<div className="login-outer-container">
				<div className="mainConatiner">
						<div className="login-form">
							<div className="login-inner card">
								<div className="card-header">
									<h2>LOGIN</h2>
								</div>
								<div className="card-body">
									<form onSubmit={LoginHandler}>
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">
												Email address
											</label>
											<input
                                                type="email"
                                                placeholder="Enter the email"
                                                className="form-control"
                                                value={L_email}
                                                onChange={(e) => setLEmail(e.target.value)}
                                            />
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputPassword1">
												Password
											</label>
											<input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter the email"
                                                value={L_password}
                                                onChange={(e) => setLPassword(e.target.value)}
                                            />
										</div>
										
										<div className="form-group text-center">
											<button
												type="submit"
												className="pl-3 pr-3 btn btn-primary"
											>
												Login
											</button>
                                                <p className="text-danger">{L_error}</p>
						                        <p className="text-info">{L_msg}</p>
										</div>
										<hr />
										<div className="form-group">
											<h5>
												<span className="heading_color">
													Social Login{' '}
												</span>
												<i
													className="fa fa-facebook-official login-fb"
													aria-hidden="true"
												></i>
												<i
													className="fa fa-google-plus-square login-goggle"
													aria-hidden="true"
												></i>
											</h5>
										</div>
										<div className="form-group register-option-mobile">
											<hr />
											<h6>
												Don't have an account ?{' '}
												<Link
													className=""
													to="/auth/register"
												>
													Register
												</Link>
											</h6>
										</div>
									</form>
								</div>
							</div>
						</div>
				</div>
			</div>
		);
	} 
};


export default connect()(LoginForm);
