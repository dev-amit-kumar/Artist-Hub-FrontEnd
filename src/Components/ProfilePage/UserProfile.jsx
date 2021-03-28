import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../Redux/Actions/UserProfile';
import Dp from './Common/Dp';
import Details from './UserComponents/Detail';
import GalleryView from '../Common/GalleryView';
import Loading from '../Common/Loading';

const UserPage = ({
	match,
	UserDetail,
	fetchUser,
	followingCount,
	followingDetail,
	savedPost,
	isLoadingUserDetail,
}) => {
	useEffect(() => {
		fetchUser(match.params.id);
	}, [match.params.id, fetchUser]);

	if (UserDetail) {
		if (UserDetail.data) {
			return (
				<>
					<div className="d-flex flex-row justify-content-center flex-wrap">
						<Dp
							Dp={UserDetail.data.profilePic}
							DpId={UserDetail.data.profilePicId}
						/>
						<Details
							Name={UserDetail.data.name}
							Desc={UserDetail.data.shortDesc}
							followingDetail={followingDetail.data}
							followingCount={followingCount.count}
						/>
					</div>
					<hr />
					<h1>Saved Post</h1>
					<div className=" container d-flex flex-row flex-wrap">
						{savedPost.data ? (
							savedPost.data.map((val, idx) => {
								return <GalleryView Data={val} key={idx} />;
							})
						) : (
							<h1 className="col-12 mt-5 text-center">
								No Post Found
							</h1>
						)}
					</div>
				</>
			);
		} else {
			return <h1>{UserDetail.message}</h1>;
		}
	} else if (isLoadingUserDetail) {
		return <Loading />;
	} else {
		return <h1>error</h1>;
	}
};
const mapStateToProps = (state) => {
	return {
		UserDetail: state.UserReducer.UserDetail,
		isLoadingUserDetail: state.UserReducer.isLoadingUserDetail,
		followingDetail: state.UserReducer.followingDetail,
		followingCount: state.UserReducer.followingCount,
		savedPost: state.UserReducer.savedPost,
	};
};
export default connect(mapStateToProps, { fetchUser })(UserPage);
