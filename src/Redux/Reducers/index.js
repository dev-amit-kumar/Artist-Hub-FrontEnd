import { combineReducers } from "redux";

import UserAuth from "./UserAuth";
import ArtistReducer from "./ArtistReducer";
import UserReducer from "./UserReducer";
import PostReducer from "./PostReducer";
const rootReducer = combineReducers({
  UserAuth,
  ArtistReducer,
  UserReducer,
  PostReducer,
});

export default rootReducer;
