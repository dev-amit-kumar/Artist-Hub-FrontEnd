import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchArtist } from "../../Redux/actions/ArtistProfile";
import CoverPic from "./Components/CoverPic";
import Dp from "./Components/Dp";
import Details from "./Components/Details";
import Gallery from "./Components/Gallery";

const ArtistPage = (props) => {
  const id = props.match.params.id;
  useEffect(() => {
    props.fetchArtist(id);
  }, []);
  if (props.ArtistDetail) {
    if (props.ArtistDetail.data) {
      return (
        <div className="d-flex flex-column">
          <CoverPic
            CoverPic={props.ArtistDetail.data.coverPic}
            coverId={props.ArtistDetail.data.coverPicId}
          />
          <div className="container mt-2 d-flex flex-row">
            <Dp
              Dp={props.ArtistDetail.data.profilePic}
              DpId={props.ArtistDetail.data.profilePicId}
            />
            <Details
              Id={props.ArtistDetail.data._id}
              Name={props.ArtistDetail.data.name}
              Occassion={props.ArtistDetail.data.occassion}
              Desc={props.ArtistDetail.data.shortDesc}
              followingDetail={props.followingDetail.data}
              followerDetail={props.followerDetail.data}
              followerCount={props.followerCount.count}
              followingCount={props.followingCount.count}
            />
          </div>
          <hr />
          <Gallery Id={props.match.params.id} />
        </div>
      );
    } else {
      return <h1>{props.ArtistDetail.message}</h1>;
    }
  } else if (props.isLoadingArtistDetail) {
    return <h4>Loading</h4>;
  } else {
    return <h1>error</h1>;
  }
};
const mapStateToProps = (state) => {
  return {
    ArtistDetail: state.ArtistReducer.ArtistDetail,
    isLoadingArtistDetail: state.ArtistReducer.isLoadingArtistDetail,
    followingDetail: state.ArtistReducer.followingDetail,
    followerDetail: state.ArtistReducer.followerDetail,
    followingCount: state.ArtistReducer.followingCount,
    followerCount: state.ArtistReducer.followerCount,
  };
};
export default connect(mapStateToProps, { fetchArtist })(ArtistPage);
