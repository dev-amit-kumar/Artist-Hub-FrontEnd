const initialState = {
    ArtistData:null
};

const ArtistReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case "GET_ARTIST":
            return {
                ...state,
                ArtistData: payload.ArtistData,
                }
        default:
            return state;
    }   
}

export default ArtistReducer;
