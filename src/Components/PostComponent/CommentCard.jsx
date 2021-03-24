import React, { useEffect, useState } from 'react';
import { addNewComment, getComment } from '../../Redux/Actions';

const CommentCard = ({ postId }) => {
	const [newComment, setComment] = useState('');
	const [commentList, setCommentList] = useState([]);
	const [errorMsg, setErrorMsg] = useState('');

	const addCommentHandler = (e) => {
		e.preventDefault();
		addNewComment(postId, newComment, (reply) => {
			if (reply) {
				setComment('');
				getComment(postId, (reply) => {
					if (reply) {
						setCommentList(reply.data);
					} else {
						setErrorMsg('Something went wrong');
					}
				});
			} else {
				setErrorMsg('Something went wrong');
			}
		});
	};

	useEffect(() => {
		getComment(postId, (reply) => {
			if (reply) {
				setCommentList(reply.data);
			} else {
				setErrorMsg('Something went wrong');
			}
		});
	}, [postId]);

	const renderComment = () => {
		return commentList.map((data) => {
			return (
				<div className="card" key={data._id}>
					<span>
						<span className="text-capitalize me-2 ms-2 bg-primary text-white border border-primary border-1 rounded-pill pe-2 ps-2">
							{data.userData[0].name}
						</span>
						{data.comment}
					</span>
				</div>
			);
		});
	};

	return (
		<div className="commentSection card-footer p-2">
			<form onSubmit={addCommentHandler}>
				<div className="input-group mb-2">
					<input
						type="text"
						placeholder="Enter the comment"
						className="form-control"
						aria-label="Recipient's username"
						aria-describedby="button-addon2"
						value={newComment}
						onChange={(e) => setComment(e.target.value)}
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
			{errorMsg && <p>{errorMsg}</p>}
			<div style={{ maxHeight: '100px', overflowY: 'scroll' }}>
				{renderComment()}
			</div>
		</div>
	);
};

export default CommentCard;
