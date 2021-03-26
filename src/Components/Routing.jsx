import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Common/Header';
import Footer from './Common/Footer';
import SideNav from './Common/SideNav';
import RightSide from './Common/RightSide';
import PageNotFound from './Common/PageNotFound';
import Login from './Auth/Login';
import Register from './Auth/Register';
import HomePage from './HomePage';
import ExplorePage from './ExplorePage';
import { connect } from 'react-redux';
import { setUser } from '../Redux/Actions';
import '../css/index.css';

class Routing extends React.Component {
	componentDidMount() {
		if (localStorage.getItem('auth-token')) {
			this.props.setUser();
		}
	}
	render() {
		return (
			<BrowserRouter>
				<Header />
				<div className="d-flex flex-row">
					<div className="rightSideBar">
						<SideNav />
					</div>
					<div className="card main-container">
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route
								exact
								path="/explore"
								component={ExplorePage}
							/>
							<Route
								exact
								path="/quotation"
								component={ExplorePage}
							/>
							<Route exact path="/save" component={ExplorePage} />
							<Route
								exact
								path="/profile"
								component={ExplorePage}
							/>
							<Route
								exact
								path="/setting"
								component={ExplorePage}
							/>
							<Route
								exact
								path="/artist/:userId"
								component={ExplorePage}
							/>
							<Route exact path="/auth/login" component={Login} />
							<Route
								exact
								path="/auth/register"
								component={Register}
							/>
							<Route component={PageNotFound} />
						</Switch>
					</div>
					<div
						className="card leftSideBar"
						style={{ height: '100vh' }}
					>
						<RightSide />
					</div>
				</div>
				<Footer />
			</BrowserRouter>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		user: state.UserAuth.user,
	};
};

export default connect(mapStateToProps, { setUser })(Routing);
