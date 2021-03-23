import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { connect } from 'react-redux';
import { getPostList, addNewRating } from '../../redux/actions';

const RatingCard = ({
	list,
	postId,
	getPostList,
	postUrl,
	pageNo,
	isRated,
}) => {
	const [newRating, setRating] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const [newList, setnewList] = useState([]);

	const addCommentHandler = (e) => {
		e.preventDefault();
		addNewRating(postId, newRating, (reply, err) => {
			if (reply) {
				setnewList([reply, ...list]);
				setRating('');
				getPostList(postUrl, pageNo);
			} else {
				setErrorMsg(err);
			}
		});
	};

	const setRate = (value) => {
		setRating(value);
	};

	const renderComment = () => {
		if (newList.length !== 0) {
			return newList.map((data) => {
				return (
					<div className="card" key={data._id}>
						{data.rating}
					</div>
				);
			});
		} else {
			return list.map((data) => {
				return (
					<div className="card" key={data._id}>
						<ReactStars
							count={5}
							value={data.rating}
							// onChange={ratingChanged}
							isHalf={true}
							size={24}
							activeColor="#ffd700"
						/>
					</div>
				);
			});
		}
	};

	return (
		<div className="commentSection card-footer p-2">
			{isRated && (
				<form onSubmit={addCommentHandler}>
					<div className="input-group mb-2">
						<ReactStars
							count={5}
							onChange={setRate}
							isHalf={true}
							size={24}
							activeColor="#ffd700"
						/>
						<button
							className="btn btn-primary"
							type="submit"
							id="button-addon2"
						>
							Add
						</button>
					</div>
				</form>
			)}
			{errorMsg && <p>{errorMsg}</p>}
			<div style={{ maxHeight: '100px', overflowY: 'scroll' }}>
				{renderComment()}
			</div>
		</div>
	);
};

export default connect('', { getPostList })(RatingCard);
