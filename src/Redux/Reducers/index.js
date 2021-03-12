import { combineReducers } from 'redux';
import ArtistPost from "./ArtistPost";
import CommentReducer from "./CommentReducer";

const rootReducer = combineReducers({
    ArtistPost,
    CommentReducer
});

export default rootReducer;
