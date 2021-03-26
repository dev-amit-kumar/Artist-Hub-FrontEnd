import { useEffect, useState } from 'react';
import GalleryView from './GalleryView';
import { fetchPost } from '../../../Redux/Actions/ArtistProfile';
import { connect } from 'react-redux';

const Gallery = (props) => {
	useEffect(() => {
		props.fetchPost(props.Id, 'getAllPostByUser');
	}, []);
	const renderPost = (e) => {
		props.fetchPost(props.Id, e.target.value);
	};
	if (props.Post) {
		return (
			<div>
				<nav className="container d-flex justify-content-center">
					<div className="nav nav-tabs" id="nav-tab" role="tablist">
						<button
							onClick={renderPost}
							value="getAllPostByUser"
							className="nav-link active"
							id="nav-home-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-All"
							type="button"
							role="tab"
							aria-controls="nav-home"
							aria-selected="true"
						>
							All
						</button>
						<button
							onClick={renderPost}
							value="getPinnedPostByUser"
							className="nav-link"
							id="nav-home-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-Pinned"
							type="button"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false"
						>
							Pinned
						</button>
						<button
							onClick={renderPost}
							value="getMostRatedPostByUserId"
							class="nav-link"
							id="nav-home-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-mostRated"
							type="button"
							role="tab"
							aria-controls="nav-contact"
							aria-selected="false"
						>
							Most Rated
						</button>
					</div>
				</nav>
				<div className=" container justify-content-center d-flex flex-row flex-wrap">
					{props.Post.data ? (
						props.Post.data.map((val, idx) => {
							return <GalleryView Data={val} key={idx} />;
						})
					) : (
						<h1 className="col-12 text-center">No Post Found</h1>
					)}
				</div>
			</div>
		);
	} else if (props.isLoadingPostDetail) {
		return <h1>Loading</h1>;
	} else {
		return <h1>error</h1>;
	}
};
const mapStateToProps = (state) => {
	return {
		Post: state.PostReducer.Post,
		isLoadingPostDetail: state.PostReducer.isLoadingPostDetail,
	};
};
export default connect(mapStateToProps, { fetchPost })(Gallery);
