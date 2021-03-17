import { useEffect } from "react";
import { connect } from "react-redux";

const SmallCard = (props) => {
  useEffect(() => {
    props.fetchPicture(props.PostId);
  }, []);
  const renderPicture = (data) => {
    if (data) {
      return data.map((val, idx) => {
        if (val.postId === props.PostId) {
          return (
            <div className="card" style={{ width: "22vw" }}>
              <div className="card-body">
                <img
                  style={{ height: "40vh", width: "20vw" }}
                  src={data[0].file_path}
                  alt="small post"
                />
              </div>
            </div>
          );
        }
      });
    }
  };
  return (
    <div className="d-flex flex-row">{renderPicture(props.PictureData)}</div>
  );
};
const mapStateToProps = (state) => {
  return {
    PictureData: state.PictureReducer.PictureData,
  };
};
export default connect(mapStateToProps, { })(SmallCard);
