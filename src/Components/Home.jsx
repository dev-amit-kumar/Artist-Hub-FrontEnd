import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostList } from '../redux/actions';
import Loading from './common/Loading';
import PostCard from './common/PostCard';

const post_url = 'explore/getAllPost';
const page_no = 1;

const Home = ({ getPostList, postList, postListError, isLoadingPostList }) => {
	useEffect(() => {
		getPostList(post_url, page_no);
	}, [getPostList]);
	if (postList) {
		return (
			<div>
				{postList.map((post, idx) => {
					return (
						<PostCard
							key={idx}
							data={post}
							postUrl={post_url}
							pageNo={page_no}
						/>
					);
				})}
			</div>
		);
	} else if (isLoadingPostList) {
		return <Loading />;
	} else {
		return <p>{postListError}</p>;
	}
};

const mapStateToProps = (state) => {
	return {
		postList: state.GetPostList.postList,
		postListError: state.GetPostList.postListError,
		isLoadingPostList: state.GetPostList.isLoadingPostList,
	};
};

export default connect(mapStateToProps, { getPostList })(Home);
