import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import PageNotFound from './common/PageNotFound';
import Header from './common/Header';
import Footer from './common/Footer';
import Login from './auth/Login';
import Register from './auth/Register';
import SideNav from './common/SideNav';
import RightSide from './common/RightSide';
import Explore from './Explore';
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
							<Route exact path="/" component={Home} />
							<Route exact path="/explore" component={Explore} />
							<Route exact path="/explore" component={Explore} />
							<Route
								exact
								path="/quotation"
								component={Explore}
							/>
							<Route exact path="/save" component={Explore} />
							<Route exact path="/profile" component={Explore} />
							<Route exact path="/setting" component={Explore} />
							<Route
								exact
								path="/artist/:userId"
								component={Explore}
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
