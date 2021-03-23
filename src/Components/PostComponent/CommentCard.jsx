import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getPostList, addNewComment } from '../../Redux/Actions';

const CommentCard = ({ list, postId, getPostList, postUrl, pageNo }) => {
	const [newComment, setComment] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const [newList, setnewList] = useState([]);

	const addCommentHandler = (e) => {
		e.preventDefault();
		addNewComment(postId, newComment, (reply) => {
			if (reply) {
				setnewList([reply, ...list]);
				setComment('');
				getPostList(postUrl, pageNo);
			} else {
				setErrorMsg('Something went wrong');
			}
		});
	};

	const renderComment = () => {
		if (newList.length !== 0) {
			return newList.map((data) => {
				return (
					<div className="card" key={data._id}>
						{data.comment}
					</div>
				);
			});
		} else {
			return list.map((data) => {
				return (
					<div className="card" key={data._id}>
						{data.comment}
					</div>
				);
			});
		}
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

export default connect('', { getPostList })(CommentCard);
