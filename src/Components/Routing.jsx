import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import PageNotFound from './common/PageNotFound';
import Header from './common/Header';
import Footer from './common/Footer';
import Login from './auth/Login';
import Register from './auth/Register';
import SideNav from './common/SideNav';
import RightSide from './common/RightSide';
import ExplorePage from './ExplorePage';
import '../css/index.css';

const Routing = () => {
	return (
		<BrowserRouter>
			<Header />
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3 card" style={{ height: '100vh' }}>
						<SideNav />
					</div>
					<div className="col-md-6 card main-container">
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
					<div className="col-md-3 card" style={{ height: '100vh' }}>
						<RightSide />
					</div>
				</div>
			</div>
			<Footer />
		</BrowserRouter>
	);
};

export default Routing;
