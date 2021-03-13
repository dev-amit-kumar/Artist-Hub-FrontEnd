import { combineReducers } from 'redux';
import ArtistPost from "./ArtistPost";
import CommentReducer from "./CommentReducer";
import LikeReducer from "./LikeReducer";
import PictureReducer from "./PictureReducer";
import ArtistReducer from "./ArtistReducer";
const rootReducer = combineReducers({
    ArtistPost,
    CommentReducer,
    LikeReducer,
    PictureReducer,
    ArtistReducer
});

export default rootReducer;
