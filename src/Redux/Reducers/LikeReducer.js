const initialState = {
    LikeData:null
};

const LikeReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case "GET_LIKE":
            return {
                ...state,
                LikeData: payload.LikeData,
                }
        default:
            return state;
    }   
}

export default LikeReducer;
