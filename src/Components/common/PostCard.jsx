import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { likePost, getComment, getRatings } from '../../redux/actions';
import CommentCard from './CommentCard';

const PostCard = (props) => {
	const [likes, setLikes] = useState('');
	const [commentList, setCommentList] = useState([]);
	const [showComment, setShowComment] = useState(false);
	const [showRating, setShowRating] = useState(false);
	const [ratingList, setRatingList] = useState([]);
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
		getComment(props.data.postId, (reply) => {
			if (reply) {
				setCommentList(reply.data);
			} else {
				setErrorMsg('Something went wrong');
			}
		});
	};

	const ratingHandler = () => {
		getRatings(props.data.postId, (reply) => {
			if (reply) {
				console.log(reply.data);
				setRatingList(reply.data);
			} else {
				setErrorMsg('Something went wrong');
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
		<div className="card post_card mt-3">
			<div className="card-header">
				<Link to={`/artist/${props.data.userId}`}>
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
					<span className="me-2">{props.data.userData[0].name}</span>
				</Link>
				<i className="fas fa-bullseye"></i>
				<span className="ms-1 me-1">{props.data.occassion}</span>
				<i className="fas fa-map-marker-alt"></i>
				<span className="ms-1">{props.data.location}</span>
				<i className="float-end fas fa-ellipsis-v"></i>
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
					<span onClick={likeHandler}>
						{isLiked ? (
							<i className="fas fa-heart"></i>
						) : (
							<i className="far fa-heart"></i>
						)}
						&nbsp;&nbsp;
						{renderLike()}
					</span>
					<span onClick={commentHandler}>
						<i className="far fa-comment"></i>
						&nbsp;&nbsp;
						{props.data.comments.length ? (
							<span>{props.data.comments[0].commentsCount}</span>
						) : (
							<span>0</span>
						)}
					</span>
					<span onClick={ratingHandler}>
						<i className="fas fa-star"></i>
						&nbsp;&nbsp;
						{props.data.ratings.length ? (
							<span>{props.data.ratings[0].avgRating}</span>
						) : (
							<span>0</span>
						)}
					</span>
				</div>
			</div>
			{showComment && (
				<CommentCard
					list={commentList}
					postId={props.data.postId}
					postUrl={props.postUrl}
					pageNo={props.pageNo}
				/>
			)}
			{errorMsg && <p>{errorMsg}</p>}
			<h1>{props.name}</h1>
		</div>
	);
};

export default PostCard;
