import { useState } from 'react';
import PostList from './postComponent/PostList';

const ExplorePage = () => {
	const [ExploreType, setExploreType] = useState('getAllPost');
	const [showOccasssion, setShowOccasssion] = useState(false);
	const [showSearch, setShowSearch] = useState(false);
	const [search, setSearch] = useState('');

	const searchHandler = (e) => {
		e.preventDefault();
		setExploreType(`searchPostByTag/${search}`);
	};
	return (
		<>
			<div>
				<button
					id="getAllPost"
					onClick={(e) => {
						setExploreType(e.target.id);
						setShowOccasssion(false);
						setShowSearch(false);
					}}
				>
					All Post
				</button>
				<button
					onClick={() => {
						setShowOccasssion(!showOccasssion);
						setShowSearch(false);
					}}
				>
					By Occasssion
				</button>
				<button
					id="searchPostByTag/hill"
					onClick={() => {
						setShowSearch(!showSearch);
						setShowOccasssion(false);
					}}
				>
					By Tag
				</button>
			</div>
			{showOccasssion && (
				<select
					className="form-select"
					onClick={(e) =>
						setExploreType(
							`searchPostByOccasssion/${e.target.value}`,
						)
					}
				>
					<option value="wedding">Wedding</option>
					<option value="birthday">Birthday</option>
					<option value="outing">Outing</option>
				</select>
			)}
			{showSearch && (
				<form onSubmit={searchHandler}>
					<div className="input-group mb-3">
						<input
							type="search"
							placeholder="Search"
							className="form-control"
							aria-label="Recipient's username"
							aria-describedby="button-addon2"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<button
							className="btn btn-primary"
							type="submit"
							id="button-addon2"
						>
							<i className="fas fa-search"></i>
						</button>
					</div>
				</form>
			)}
			<div className="container-fluid">
				<PostList postUrl={`explore/${ExploreType}`} />
			</div>
		</>
	);
};

export default ExplorePage;
