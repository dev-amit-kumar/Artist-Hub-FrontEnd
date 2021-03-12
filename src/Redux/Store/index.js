import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../Reducers/index';

let store = createStore(reducers,applyMiddleware(reduxThunk));

export default store;
