const initialState = {
    CommentData:null,
    LikeData:null,
    LikeCount:null,
    CommentCount:null,
    PictureData:null
  };
  
  const AllData = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "GET_ALL_DATA":
        return {
            CommentData:payload.CommentData,
            LikeData:payload.LikeData,
            LikeCount:payload.LikeCount,
            CommentCount:payload.CommentCount,
            PictureData:payload.PictureData
        };
      default:
        return state;
    }
  };
  
  export default AllData;
  