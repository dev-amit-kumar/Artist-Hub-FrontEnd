import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../Redux/Actions/UserProfile';
import Dp from '../UserProfilePage/Components/Dp';
import Details from './Components/Detail';
import GalleryView from './Components/GalleryView';

const UserPage = (props) => {
	const id = props.match.params.id;
	useEffect(() => {
		props.fetchUser(id);
	}, [props.match.params.id]);
	console.log(props.savedPost ? props.savedPost.data : 'h', 'saved');
	if (props.UserDetail) {
		if (props.UserDetail.data) {
			return (
				<div className="mt-5 d-flex flex-column">
					<div className=" d-flex flex-row justify-content-center">
						<Dp
							Dp={props.UserDetail.data.profilePic}
							DpId={props.UserDetail.data.profilePicId}
						/>
						<Details
							Name={props.UserDetail.data.name}
							Desc={props.UserDetail.data.shortDesc}
							followingDetail={props.followingDetail.data}
							followingCount={props.followingCount.count}
						/>
					</div>
					<hr />
					<div className=" container d-flex flex-row flex-wrap">
						{props.savedPost.data[0] ? (
							props.savedPost.data.map((val, idx) => {
								<GalleryView Data={val} key={idx} />;
							})
						) : (
							<h1 className="col-12 mt-5 text-center">
								No Post Found
							</h1>
						)}
					</div>
				</div>
			);
		} else {
			return <h1>{props.UserDetail.message}</h1>;
		}
	} else if (props.isLoadingUserDetail) {
		return <h4>Loading</h4>;
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
