import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import '../../css/Header.css';
import { logoutUser } from '../../Redux/Actions';
import { connect } from 'react-redux';

const Header = (props) => {
	const handleLogout = () => {
		props.logoutUser();
		props.history.push('/auth/login');
	};
	return (
		<>
			<nav className="navbar navbar-expand-lg sticky-top">
				<div className="d-flex flex-grow-1 justify-content-between">
					<Link to="/" className="navbar-brand">
						<span className="text-light text-uppercase">
							Artist Hub
						</span>
					</Link>
					{props.user ? (
						<button
							className="btn text-light fw-bold"
							onClick={handleLogout}
						>
							Log out <i className="fas fa-sign-out-alt"></i>
						</button>
					) : (
						<NavLink
							className="btn text-light fw-bold"
							to="/auth/login"
						>
							Login/Signup{' '}
							<i
								className="fas fa-sign-in-alt"
								aria-hidden="true"
							></i>
						</NavLink>
					)}
				</div>
			</nav>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.UserAuth.user,
	};
};

export default withRouter(connect(mapStateToProps, { logoutUser })(Header));
