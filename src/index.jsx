import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import Routing from './Components/Routing';
import './css/index.css';

ReactDOM.render(
	<React.Fragment>
		<Provider store={store}>
			<Routing />
		</Provider>
	</React.Fragment>,
	document.getElementById('root'),
);
