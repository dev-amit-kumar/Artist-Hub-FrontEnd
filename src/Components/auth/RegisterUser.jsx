import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
const url = 'http://localhost:3000/auth';

const SignupForm = (props) => {
	const [R_email, setREmail] = useState('');
	const [R_password, setRPassword] = useState('');
	const [name, setName] = useState('');
	const [R_error, setRError] = useState('');
	const [R_msg, setRMsg] = useState('');

	const registerHandler = (e) => {
		e.preventDefault();
		var data = {
			email: R_email,
			password: R_password,
			name: name,
		};
		axios.post(`${url}/registeruser`, data).then((reply) => {
			if (reply.data.status === 400) {
				setRMsg('');
				setRError(reply.data.error);
			} else if (reply.data.status === 200) {
				setRMsg(reply.data.message);
				setRError('');
			}
		});
	};
	if (!props.user) {
		return (
			<div className="signup-form login-outer-container">
				<div className="mainConatiner">
						<div className="login-form">
							<div className="signup-inner login-inner card">
								<div className="card-header">
									<h2>Create Account</h2>
								</div>
								<div className="card-body">
									<form onSubmit={registerHandler}>
										<div className="row">
											<div className="form-group col-md-6 col-sm-6">
												<label htmlFor="full_name">
													Full Name
												</label>
												<input
													type="text"
													placeholder="Enter the name"
													className="form-control"
													value={name}
													onChange={(e) => setName(e.target.value)}
												/>
											</div>
											<div className="form-group col-md-6 col-sm-6">
												<label htmlFor="email_id">
													Email address
												</label>
												<input
													type="email"
													placeholder="Enter the email"
													className="form-control"
													value={R_email}
													onChange={(e) => setREmail(e.target.value)}
												/>
											</div>
											<div className="form-group col-md-6 col-sm-6">
												<label htmlFor="password">
													Password
												</label>
												<label>(min 6 character)</label>
												<input
													type="password"
													placeholder="Enter the email"
													className="form-control"
													value={R_password}
													onChange={(e) => setRPassword(e.target.value)}
												/>
											</div>
										</div>
										<div className="form-group text-center">						
											<button
												type="submit"
												className="pl-3 pr-3 btn btn-primary"
											>
												Create Account
											</button>
											<p className="text-danger">{R_error}</p>
											<p className="text-info">{R_msg}</p>
										</div>
										<hr />
										<div className="form-group">
											<h5>
												<span className="heading_color">
													Social Signup{' '}
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
												Already have an account ?
												<Link
													className=""
													to="/auth/login"
												>
													Login
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
}
export default connect()(SignupForm);