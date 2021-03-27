import SideNav from './Common/SideNav';
import RightSide from './Common/RightSide';
import HomePage from './HomePage';
import UserProfile from './UserProfilePage/UserProfile';
import ArtistProfile from './ArtistProfilePage/ArtistPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import ExplorePage from './ExplorePage';
import SavedPost from './Common/SavedPost';
import Setting from './Setting/Index';
import '../css/index.css';
import { connect } from 'react-redux';

const MainContainer = (props) => {
	if (props.user) {
		return (
			<div className="d-flex flex-row">
				<div className="rightSideBar">
					<SideNav />
				</div>
				<div className="card main-container">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/explore" component={ExplorePage} />
						{props.user.type === 'user' ? (
							<Route
								exact
								path={`/profile/:id`}
								component={UserProfile}
							/>
						) : (
							<Route
								exact
								path={`/profile/:id`}
								component={ArtistProfile}
							/>
						)}
						<Route
							exact
							path="/artist/:id"
							component={ArtistProfile}
						/>
						<Route exact path="/save" component={SavedPost} />
						<Route exact path="/setting" component={Setting} />
					</Switch>
				</div>
				<div className="card leftSideBar" style={{ height: '100vh' }}>
					<RightSide />
				</div>
			</div>
		);
	} else {
		return <Redirect to="/auth/login"></Redirect>;
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
export default connect(mapStateToProps)(MainContainer);
