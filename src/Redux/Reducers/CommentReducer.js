const initialState = {
    CommentData:null
};

const CommentReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case "GET_COMMENT":
            return {
                ...state,
                CommentData: payload.CommentData,
                }
        default:
            return state;
    }   
}

export default CommentReducer;
