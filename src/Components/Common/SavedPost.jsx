import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSavedPost } from "../../Redux/Actions/SavedPost";
import Dp from "../UserProfilePage/Components/Dp";
import GalleryView from "../UserProfilePage/Components/GalleryView";
const SavedPost = (props) => {
  useEffect(() => {
    props.fetchSavedPost(props.match.params.id);
  }, []);
  if (props.PostDetail) {
    if (props.PostDetail.data) {
      return (
        <div>
          <div className=" d-flex flex-row justify-content-center">
            <Dp
              Dp={props.PostDetail.data.profilePic}
              DpId={props.PostDetail.data.profilePicId}
            />
            <h1 className="d-flex align-items-center">
              {props.PostDetail.data.name}
            </h1>
          </div>
          <hr />
          <h4 className="text-center text-primary">Saved Post</h4>
          <div className=" container d-flex flex-row flex-wrap">
            {props.savedPost.data ? (
              props.savedPost.data.map((val, idx) => {
                return <GalleryView Data={val} key={idx} />;
              })
            ) : (
              <div className="col-12 mt-5 text-center">
                <p>Only you can see what you've saved</p>
                <img
                  style={{
                    border: "2px solid black",
                    width: 100,
                    height: 100,
                    borderRadius: 100 / 2,
                  }}
                  src="https://i.pinimg.com/originals/ca/44/77/ca4477c4eeff8d0ac211fa114be21e6c.png"
                  alt="saved post"
                />
                <p>Save photos and videos that you want to see again. No</p>
                <p>one is notified, and only you can see what you've saved.</p>
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return <h1>{props.PostDetail.message}</h1>;
    }
  } else if (props.isLoadingSavedtDetail) {
    return <h4>Loading</h4>;
  } else {
    return <h1>error</h1>;
  }
};

const mapStateToProps = (state) => {
  return {
    PostDetail: state.SavedReducer.PostDetail,
    savedPost: state.SavedReducer.savedPost,
    isLoadingSavedtDetail: state.SavedReducer.isLoadingSavedtDetail,
  };
};
export default connect(mapStateToProps, { fetchSavedPost })(SavedPost);
