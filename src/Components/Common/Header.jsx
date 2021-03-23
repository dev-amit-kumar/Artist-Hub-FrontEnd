import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<img
							src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
							alt=""
							width="30"
							height="24"
							className="d-inline-block align-top"
						/>
						Bootstrap
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to="/"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Link
								</Link>
							</li>
							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									to="/"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Dropdown
								</Link>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdown"
								>
									<li>
										<Link className="dropdown-item" to="/">
											Action
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="/">
											Another action
										</Link>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<Link className="dropdown-item" to="/">
											Something else here
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link disabled"
									to="/"
									tabIndex="-1"
									aria-disabled="true"
								>
									Disabled
								</Link>
							</li>
						</ul>
						<div className="d-flex">
							<NavLink
								to="/auth/register"
								className="btn btn-success"
							>
								Register
							</NavLink>
							<NavLink
								to="/auth/login"
								className="btn btn-primary ms-2"
							>
								Login
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
