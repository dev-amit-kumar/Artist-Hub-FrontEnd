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
      if(data.data){
        console.log(data.data)
        return (
          <div className="d-flex flex-column">
            <div>
              <img
                className="col-12"
                style={{ height: "30vh" }}
                src={data.data.cover}
                alt="artist pic"
              />
            </div>
            <div className="d-flex flex-row">
              <div className="col-5 d-flex justify-content-center">
                <img
                  style={{ borderRadius: "50%", height: "25vh", width: "15vw" }}
                  src={data.data.profilePic}
                  alt="artist profile"
                />
              </div>
              <div className="d-flex align-items-center">
                <div className="d-flex flex-column">
                  <h1>{data.data.name}</h1>
                  <p>{data.data.description}</p>
                  <div className="d-flex flex-row">
                    {data.data.type!="user"?data.data.occasion.map((val) => {
                      return <p className="mr-2">{val}</p>;
                    }):data.data.occasion}
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
            </div>
          </div>
        );
      }
      else{
        console.log(data)
      }
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
