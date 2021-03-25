import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/sideNav.css';

const SideNav = () => {
	const [isClicked, setClicked] = useState(false);
	return (
		<div
			className={`sidebar d-flex flex-column ${
				isClicked ? '' : 'active'
			}`}
		>
			<NavLink
				to="/"
				exact
				activeClassName="optionActive"
				className="navOption"
			>
				<i className="fas fa-home option"></i>
				<span className={`showNavText ${isClicked ? '' : 'active'}`}>
					Home
				</span>
			</NavLink>
			<NavLink
				to="/explore"
				activeClassName="optionActive"
				className="navOption"
			>
				<i className="fas fa-images option"></i>
				<span className={`showNavText ${isClicked ? '' : 'active'}`}>
					Explore
				</span>
			</NavLink>
			<NavLink
				to="/quotation"
				activeClassName="optionActive"
				className="navOption"
			>
				<i className="fas fa-money-check-alt option"></i>
				<span className={`showNavText ${isClicked ? '' : 'active'}`}>
					Quotation
				</span>
			</NavLink>
			<NavLink
				to="/save"
				activeClassName="optionActive"
				className="navOption"
			>
				<i className="fas fa-bookmark option"></i>
				<span className={`showNavText ${isClicked ? '' : 'active'}`}>
					Saved
				</span>
			</NavLink>
			<NavLink
				to="/profile"
				activeClassName="optionActive"
				className="navOption"
			>
				<i className="fas fa-user option"></i>
				<span className={`showNavText ${isClicked ? '' : 'active'}`}>
					Profile
				</span>
			</NavLink>
			<NavLink
				to="/setting"
				activeClassName="optionActive"
				className="navOption"
			>
				<i className="fas fa-cog option"></i>
				<span className={`showNavText ${isClicked ? '' : 'active'}`}>
					Setting
				</span>
			</NavLink>
			<div
				className={`showButton ${isClicked ? 'active' : ''}`}
				onClick={() => setClicked(!isClicked)}
			></div>
		</div>
	);
};

export default SideNav;