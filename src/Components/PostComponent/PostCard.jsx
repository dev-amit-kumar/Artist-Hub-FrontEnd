import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { likePost } from '../../Redux/Actions';
import CommentCard from './CommentCard';
import RatingCard from './RatingCard';
import '../../css/postCard.css';

const PostCard = (props) => {
	const [likes, setLikes] = useState('');
	const [showComment, setShowComment] = useState(false);
	const [showRating, setShowRating] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
	const [isLiked, setIsLiked] = useState(props.data.isLiked.length !== 0);

	const likeHandler = () => {
		likePost(props.data.postId, (reply) => {
			if (reply) {
				setLikes(reply.count);
				setIsLiked(!isLiked);
			} else {
				setErrorMsg('Something went wrong');
			}
		});
	};

	const commentHandler = () => {
		setShowComment(!showComment);
		setShowRating(false);
	};

	const ratingHandler = () => {
		setShowComment(false);
		setShowRating(!showRating);
	};

	const renderLike = () => {
		if (likes) {
			return <span>{likes}</span>;
		} else if (props.data.likes.length) {
			return <span>{props.data.likes[0].likesCount}</span>;
		} else {
			return <span>0</span>;
		}
	};

	return (
		<div className="card post_card mt-3">
			<div className="card-header">
				<Link to={`/artist/${props.data.userId}`} className="link-dark">
					{props.data.userData[0].profilePic ? (
						<img
							src={props.data.userData[0].profilePic}
							width="30"
							height="30"
							style={{ borderRadius: '50%', borderColor: '#000' }}
							alt="Userpic"
						/>
					) : (
						<i className="far fa-user-circle"></i>
					)}
					<span className="me-2 ms-2 username">
						<b>{props.data.userData[0].name}</b>
					</span>
				</Link>
				<span className="float-end">
					<span>
						<i className="fas fa-camera text-success"></i>
						<span className="ms-1 me-2 text-capitalize">
							{props.data.occassion}
						</span>
					</span>
					<span>
						<i className="fas fa-map-marker-alt text-primary"></i>
						<span className="ms-1 me-4 text-capitalize">
							{props.data.location}
						</span>
					</span>
					<span>
						<i className="fas fa-ellipsis-v"></i>
					</span>
				</span>
			</div>
			<div className="postImages">
				<Carousel showThumbs={false}>
					{props.data.all_files.files.map((img, idx) => {
						return (
							<img
								key={`${props.data.postId}${idx}`}
								src={img}
								style={{
									height: '400px',
									width: '100%',
								}}
								alt="postImage"
							/>
						);
					})}
				</Carousel>
			</div>
			<div className="card-footer">
				<div className="container-fluid d-flex justify-content-around">
					<span onClick={likeHandler} type="button">
						{isLiked ? (
							<i className="fas fa-heart text-danger"></i>
						) : (
							<i className="far fa-heart text-danger"></i>
						)}
						&nbsp;&nbsp;
						{renderLike()}
					</span>
					<span onClick={commentHandler} type="button">
						<i className="fas fa-comment text-info"></i>
						&nbsp;&nbsp;
						{props.data.comments.length ? (
							<span>{props.data.comments[0].commentsCount}</span>
						) : (
							<span>0</span>
						)}
					</span>
					<span onClick={ratingHandler} type="button">
						{props.data.isRated.length !== 0 ? (
							<i className="fas fa-star text-warning"></i>
						) : (
							<i className="far fa-star text-warning"></i>
						)}
						&nbsp;&nbsp; &nbsp;&nbsp;
						{props.data.ratings.length ? (
							<span>{props.data.ratings[0].avgRating}</span>
						) : (
							<span>0</span>
						)}
					</span>
				</div>
			</div>
			{errorMsg && <p>{errorMsg}</p>}
			<div className="ps-4">
				<b>{props.data.userData[0].name}</b>&emsp;
				{props.data.caption}
				<p>
					{props.data.tags.map((data, idx) => {
						return (
							<span
								className="text-primary"
								key={`${props.data.postId}${idx}`}
							>
								#{data}&nbsp;
							</span>
						);
					})}
				</p>
			</div>
			{showComment && <CommentCard postId={props.data.postId} />}
			{showRating && (
				<RatingCard
					postId={props.data.postId}
					isRated={props.data.isRated.length === 0}
				/>
			)}
		</div>
	);
};

export default PostCard;
