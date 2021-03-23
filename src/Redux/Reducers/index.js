import { combineReducers } from 'redux';

import UserAuth from './UserAuth';
import GetPostList from './getPostList.js';

const rootReducer = combineReducers({ UserAuth, GetPostList });

export default rootReducer;
