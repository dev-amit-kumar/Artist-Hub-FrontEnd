const initialState = {
    PostData:null
};

const ArtistPost = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case "GET_ARTIST_POST":
            return {
                ...state,
                PostData: payload.PostData,
                }
        default:
            return state;
    }   
}

export default ArtistPost;
