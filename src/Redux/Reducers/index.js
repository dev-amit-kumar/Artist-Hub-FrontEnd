import { combineReducers } from "redux";

import UserAuth from "./UserAuth";
import ArtistReducer from "./ArtistReducer";

const rootReducer = combineReducers({
  UserAuth,
  ArtistReducer,
});

export default rootReducer;
