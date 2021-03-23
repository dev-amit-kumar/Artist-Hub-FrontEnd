import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { addNewRating, getRatings } from '../../Redux/Actions';

const RatingCard = ({ postId, isRated }) => {
	const [newRating, setRating] = useState(0);
	const [ratingList, setRatingList] = useState([]);
	const [errorMsg, setErrorMsg] = useState('');
	const [ratingDone, setRatingDone] = useState(isRated);
	const addRatingHandler = (e) => {
		e.preventDefault();
		addNewRating(postId, newRating, (reply, err) => {
			if (reply) {
				setRating(0);
				getRatings(postId, (reply) => {
					if (reply) {
						setRatingList(reply.data);
					} else {
						setErrorMsg('Something went wrong');
					}
				});
				setRatingDone(false);
			} else {
				setErrorMsg(err);
			}
		});
	};

	useEffect(() => {
		getRatings(postId, (reply) => {
			if (reply) {
				setRatingList(reply.data);
			} else {
				setErrorMsg('Something went wrong');
			}
		});
	}, [postId]);

	const renderComment = () => {
		return ratingList.map((data) => {
			return (
				<div className="card d-flex flex-row" key={data._id}>
					<p className="text-capitalize me-2 ms-2 mt-2 bg-primary text-white border border-primary border-1 rounded-pill pe-2 ps-2">
						{data.userData[0].name}
					</p>
					<ReactStars
						count={5}
						value={data.rating}
						isHalf={true}
						size={24}
						activeColor="#ffd700"
					/>
				</div>
			);
		});
	};

	return (
		<div className="commentSection card-footer p-2">
			{ratingDone && (
				<form onSubmit={addRatingHandler}>
					<div className="input-group mb-2">
						<ReactStars
							count={5}
							onChange={(value) => setRating(value)}
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

export default RatingCard;
