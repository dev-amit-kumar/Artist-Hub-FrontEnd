import { Link } from 'react-router-dom';

const PostCard = (props) => {
	console.log(props);
	return (
		<div className="card">
			<div className="card-header">
				<Link to={`/artist/${props.data.userId}`}>
					{props.data.userData[0].profilePic ? (
						<img
							src={props.data.userData[0].profilePic}
							width="30"
							height="30"
							style={{ borderRadius: '50%', borderColor: '#000' }}
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
			<div>
				<img
					src={props.data.all_files.files[0]}
					style={{ height: '400px', maxWidth: '100%' }}
				/>
			</div>
			<div className="card-footer">
				<i className="far fa-heart"></i>
				<i className="far fa-comment"></i>
				<i className="fas fa-star"></i>
			</div>
			<h1>{props.name}</h1>
		</div>
	);
};

export default PostCard;
