import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
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
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div
						class="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<Link
									class="nav-link active"
									aria-current="page"
									to="/"
								>
									Home
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/">
									Link
								</Link>
							</li>
							<li class="nav-item dropdown">
								<Link
									class="nav-link dropdown-toggle"
									to="/"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Dropdown
								</Link>
								<ul
									class="dropdown-menu"
									aria-labelledby="navbarDropdown"
								>
									<li>
										<Link class="dropdown-item" to="/">
											Action
										</Link>
									</li>
									<li>
										<Link class="dropdown-item" to="/">
											Another action
										</Link>
									</li>
									<li>
										<hr class="dropdown-divider" />
									</li>
									<li>
										<Link class="dropdown-item" to="/">
											Something else here
										</Link>
									</li>
								</ul>
							</li>
							<li class="nav-item">
								<Link
									class="nav-link disabled"
									to="/"
									tabindex="-1"
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
