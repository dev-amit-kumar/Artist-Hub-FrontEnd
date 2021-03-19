import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import PageNotFound from './common/PageNotFound';
import Header from './common/Header';
import Footer from './common/Header';

const Routing = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route component={PageNotFound} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default Routing;
