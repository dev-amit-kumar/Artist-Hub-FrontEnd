import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../Redux/Action/UserPage";
import SmallCard from "../Common/smallCard";
const UserProfile = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, []);
  const renderUser = (data) => {
    if (data) {
      return (
        <div className="d-flex flex-column">
          <div>
            <img
              className="col-12"
              style={{ height: "30vh" }}
              src={data[0].cover}
            />
          </div>
          <div className="d-flex flex-row">
            <div className="col-5 d-flex justify-content-center">
              <img
                style={{ borderRadius: "50%", height: "25vh", width: "15vw" }}
                src={data[0].profilePic}
              />
            </div>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column">
                <h1>{data[0].name}</h1>
                <p>{data[0].desc}</p>
              </div>
            </div>
          </div>
          <div>
            <SmallCard PostId={"1"} />
          </div>
        </div>
      );
    }
  };
  return <div>{renderUser(props.UserData)}</div>;
};
const mapStateToProps = (state) => {
  return {
    UserData: state.UserReducer.UserData,
  };
};
export default connect(mapStateToProps, { fetchUser })(UserProfile);
