import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchArtist } from '../../Redux/Actions/ArtistProfile';
import CoverPic from './Components/CoverPic';
import Dp from './Components/Dp';
import Details from './Components/Details';
import Gallery from './Components/GalleryType';

const ArtistPage = ({
	match,
	ArtistDetail,
	followingDetail,
	isLoadingArtistDetail,
	fetchArtist,
	followerDetail,
	followerCount,
	followingCount,
}) => {
	useEffect(() => {
		fetchArtist(match.params.id);
	}, [match.params.id, fetchArtist]);
	if (ArtistDetail) {
		if (ArtistDetail.data) {
			return (
				<div className="d-flex flex-column">
					<CoverPic
						CoverPic={ArtistDetail.data.coverPic}
						coverId={ArtistDetail.data.coverPicId}
					/>
					<div className="container mt-2 d-flex flex-row">
						<Dp
							Dp={ArtistDetail.data.profilePic}
							DpId={ArtistDetail.data.profilePicId}
						/>
						<Details
							Id={ArtistDetail.data._id}
							Name={ArtistDetail.data.name}
							Occassion={ArtistDetail.data.occassion}
							Desc={ArtistDetail.data.shortDesc}
							followingDetail={followingDetail.data}
							followerDetail={followerDetail.data}
							followerCount={followerCount.count}
							followingCount={followingCount.count}
						/>
					</div>
					<hr />
					<Gallery Id={match.params.id} />
				</div>
			);
		} else {
			return <h1>{ArtistDetail.message}</h1>;
		}
	} else if (isLoadingArtistDetail) {
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
