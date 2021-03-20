import { NavLink } from 'react-router-dom';

const SideNav = () => {
	return (
		<div className="sidebar d-flex flex-column">
			<NavLink to="/" className="btn">
				Home
			</NavLink>
			<NavLink to="/explore" className="btn">
				Explore
			</NavLink>
			<NavLink to="/quotation" className="btn">
				Quotation
			</NavLink>
			<NavLink to="/save" className="btn">
				Saved Posts
			</NavLink>
			<NavLink to="/profile" className="btn">
				Profile
			</NavLink>
			<NavLink to="/setting" className="btn">
				Setting
			</NavLink>
		</div>
	);
};

export default SideNav;
