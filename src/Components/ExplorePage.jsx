import { useState } from 'react';
import PostList from './PostList';

const ExplorePage = () => {
	const [ExploreType, setExploreType] = useState('getAllPost');
	const filterExploreType = (e) => {
		setExploreType(e.target.id);
		console.log('changed');
	};
	return (
		<>
			<div onClick={filterExploreType}>
				<button id="getAllPost">All Post</button>
				<button id="searchPostByOccasssion">By Occasssion</button>
				<button id="searchPostByTag">By Tag</button>
			</div>
			<div className="container-fluid">
				<PostList postUrl={`explore/${ExploreType}`} />
			</div>
		</>
	);
};

export default ExplorePage;
