import { combineReducers } from 'redux';
import ArtistPost from "./ArtistPost";
import CommentReducer from "./CommentReducer";
import LikeReducer from "./LikeReducer";

const rootReducer = combineReducers({
    ArtistPost,
    CommentReducer,
    LikeReducer
});

export default rootReducer;
