import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { likePost, savePost } from '../../Redux/Actions';
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
		likePost(props.data.postId, (reply, errorMsg) => {
			if (reply) {
				setLikes(reply.count);
				setIsLiked(!isLiked);
			} else {
				setErrorMsg(errorMsg);
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

	const saveHandler = () => {
		savePost(props.data.postId, (reply, errorMsg) => {
			if (reply) {
				console.log(reply);
				// setSaved(reply)
				// setIsSaved(!isSaved);
			} else {
				setErrorMsg(errorMsg);
			}
		});
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
		<div className="post_card">
			<div className="post_card_header border-bottom">
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
						<i className="fas fa-camera text-secondary"></i>
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
					<span className="dropdown">
						<span
							role="button"
							id="dropdownMenuLink"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<i className="fas fa-ellipsis-v text-dark"></i>
						</span>
						<ul
							className="dropdown-menu"
							aria-labelledby="dropdownMenuLink"
						>
							<li>
								<span className="dropdown-item" role="button">
									Edit
								</span>
							</li>
							<li>
								<span className="dropdown-item" role="button">
									Report
								</span>
							</li>
						</ul>
					</span>
				</span>
			</div>
			<div className="post-images border-bottom">
				<Carousel showThumbs={false}>
					{props.data.all_files.files.map((img, idx) => {
						return (
							<img
								key={`${props.data.postId}${idx}`}
								src={img}
								alt="postImage"
							/>
						);
					})}
				</Carousel>
			</div>
			<div className="post-card-option border-bottom">
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
						&nbsp;&nbsp;
						{props.data.ratings.length ? (
							<span>{props.data.ratings[0].avgRating}</span>
						) : (
							<span>0</span>
						)}
					</span>
					<span onClick={saveHandler} type="button">
						<i className="fas fa-bookmark text-secondary"></i>
						&nbsp;&nbsp;5
					</span>
				</div>
			</div>
			{errorMsg && <p>{errorMsg}</p>}
			<div className="post-card-caption-tag">
				<b>{props.data.userData[0].name}</b>&emsp;
				{props.data.caption}
				<br />
				<span>
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
				</span>
			</div>
			<div className="post-card-comment-rating">
				{showComment && <CommentCard postId={props.data.postId} />}
				{showRating && (
					<RatingCard
						postId={props.data.postId}
						isRated={props.data.isRated.length === 0}
					/>
				)}
			</div>
		</div>
	);
};

export default PostCard;
