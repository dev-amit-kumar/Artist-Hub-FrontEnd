const initialState = {
    PictureData:null
};

const PictureReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case "GET_PICTURE":
            return {
                ...state,
                PictureData: payload.PictureData,
                }
        default:
            return state;
    }   
}

export default PictureReducer;
