import { combineReducers } from 'redux';
import ArtistPost from "./ArtistPost";
import ArtistReducer from "./ArtistReducer";
import AllData  from "./AllData"
const rootReducer = combineReducers({
    ArtistPost,
    ArtistReducer,
    AllData
});
export default rootReducer;
