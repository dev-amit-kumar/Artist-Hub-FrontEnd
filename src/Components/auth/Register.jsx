import React, { useState } from 'react';
import axios from 'axios';
import { base_url } from '../../redux/config';

const Register = () => {
	const [R_email, setREmail] = useState('');
	const [R_password, setRPassword] = useState('');
	const [name, setName] = useState('');
	const [R_error, setRError] = useState('');
	const [R_msg, setRMsg] = useState('');
	const [isArtist, setIsArtist] = useState(false);
	const [occasssionList, setOccassion] = useState([]);

	const occassionHandler = (e) => {
		const occassion = e.target.value;
		if (occasssionList.includes(occassion)) {
			let occassionAll = occasssionList;
			occassionAll.pop(occassion);
			setOccassion(occassionAll);
		} else {
			let occassionAll = occasssionList;
			occassionAll.push(occassion);
			setOccassion(occassionAll);
		}
		console.log(occasssionList);
	};

	const registerHandler = (e) => {
		e.preventDefault();
		var data = {
			email: R_email,
			password: R_password,
			name: name,
		};
		if (isArtist) {
			data = {
				...data,
				type: 'artist',
				occassions: occasssionList,
			};
		}
		axios.post(`${base_url}/auth/registerUser`, data).then((reply) => {
			if (reply.data.status === 400) {
				setRMsg('');
				setRError(reply.data.error);
			} else if (reply.data.status === 200) {
				setRMsg(reply.data.message);
				setRError('');
			}
			console.log(reply.data);
		});
	};

	return (
		<div className="container-fluid">
			<div className="card" style={{ width: '400px' }}>
				<h4 className="card-header text-center">Register Form</h4>
				<div className="card-body">
					<form onSubmit={registerHandler}>
						<div className="form-group mt-2">
							<label>Name</label>
							<input
								type="text"
								placeholder="Enter the name"
								className="form-control"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="form-group mt-2">
							<label>Email</label>
							<input
								type="email"
								placeholder="Enter the email"
								className="form-control"
								value={R_email}
								onChange={(e) => setREmail(e.target.value)}
							/>
						</div>
						<div className="form-group mt-2">
							<label>Password (min 6 character)</label>
							<input
								type="password"
								placeholder="Enter the email"
								className="form-control"
								value={R_password}
								onChange={(e) => setRPassword(e.target.value)}
							/>
						</div>
						<div className="form-check mt-2">
							<input
								type="checkbox"
								name="type"
								className="form-check-input"
								onClick={() => setIsArtist(!isArtist)}
							/>
							<label className="form-check-label">
								Are you a artist
							</label>
						</div>
						{isArtist && (
							<>
								<hr />
								<div className="form-group mt-2">
									<label>Choose occassion</label>
									<div className="d-flex">
										<span className="form-check mt-2 me-2">
											<input
												type="checkbox"
												name="occassion"
												value="birthday"
												className="form-check-input"
												onClick={occassionHandler}
											/>
											<label className="form-check-label">
												Birthday
											</label>
										</span>
										<span className="form-check mt-2 me-2">
											<input
												type="checkbox"
												name="occassion"
												value="wedding"
												className="form-check-input"
												onClick={occassionHandler}
											/>
											<label className="form-check-label">
												Wedding
											</label>
										</span>
										<span className="form-check mt-2 me-2">
											<input
												type="checkbox"
												name="occassion"
												value="outing"
												className="form-check-input"
												onClick={occassionHandler}
											/>
											<label className="form-check-label">
												Outing
											</label>
										</span>
									</div>
								</div>
							</>
						)}
						<div className="form-group mt-2">
							<button type="submit" className="btn btn-primary">
								Register
							</button>
							<p className="text-danger">{R_error}</p>
							<p className="text-info">{R_msg}</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
