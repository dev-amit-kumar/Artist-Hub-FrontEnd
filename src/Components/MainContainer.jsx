import SideNav from './Common/SideNav';
import RightSide from './Common/RightSide';
import HomePage from './HomePage';
import { Redirect, Route, Switch } from 'react-router-dom';
import ExplorePage from './ExplorePage';
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
