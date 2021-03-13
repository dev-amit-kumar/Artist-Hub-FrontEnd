import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchArtist } from "../../Redux/Action/ArtistPage";
import SmallCard from "../Common/smallCard";
const ArtistProfile = (props) => {
  useEffect(() => {
    props.fetchArtist();
  }, []);
  const renderArtist = (data) => {
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
                <div className="d-flex flex-row">
                  {data[0].occasion.map((val) => {
                    return <p className="mr-2">{val}</p>;
                  })}
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <div>
                  <button className="btn btn-danger">Hire</button>
                </div>
                <div>
                  <button className="btn btn-success">Follow</button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-info mr-2">All</button>
            <button className="btn btn-success">Favourate</button>
          </div>
          <div>
            <SmallCard PostId={"1"} />
          </div>
        </div>
      );
    }
  };
  return <div>{renderArtist(props.ArtistData)}</div>;
};
const mapStateToProps = (state) => {
  return {
    ArtistData: state.ArtistReducer.ArtistData,
  };
};
export default connect(mapStateToProps, { fetchArtist })(ArtistProfile);
