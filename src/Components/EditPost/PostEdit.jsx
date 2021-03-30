import { useEffect, useState } from 'react';
import ImagePostEditModal from './ImagePostEditModal';
import { fetchEditPostDetail, PostEditPostDetail } from '../../Redux/Actions';
import Loading from '../Common/Loading';

const PostEdit = (props) => {
	const [data, setData] = useState();
	const [location, setLocation] = useState(data ? data[0].location : '');
	const [desc, setDesc] = useState(data ? data[0].description : '');
	const [caption, setCaption] = useState(data ? data[0].caption : '');
	const [occassion, setOccassion] = useState(data ? data[0].occassion : '');
	const [tags, setTags] = useState(data ? data[0].tags : '');
	const [msg, setErrorMsg] = useState();
	const [succes, setSuccess] = useState();
	useEffect(() => {
		fetchEditPostDetail(props.match.params.id, (reply, errorMsg) => {
			if (reply) {
				setData(reply.data);
			} else {
				setErrorMsg(errorMsg);
			}
		});
	}, [props.match.params.id]);
	const UpdateData = () => {
		var res = tags.split(' ');
		const data = {
			location: location,
			occassion: occassion,
			description: desc,
			caption: caption,
			tags: res,
		};
		PostEditPostDetail(props.match.params, data, (reply, errorMsg) => {
			if (reply) {
				setSuccess('Data Updated');
				fetchEditPostDetail(props.match.params.id, (reply) => {
					if (reply) {
						setData(reply.data);
					} else {
						setErrorMsg(errorMsg);
					}
				});
			} else {
				setErrorMsg(errorMsg);
			}
		});
	};
	if (data && !msg) {
		return (
			<div>
				<div className="card">
					<div className="card-header">
						<h1 className="text-center">Edit</h1>
					</div>
					<div className="card-body">
						<div className="d-flex flex-row">
							<div className="col-md-6 col-sm-6">
								<label>Location</label>
								<input
									name="location"
									type="text"
									value={location}
									onChange={(e) => {
										setLocation(e.target.value);
									}}
									placeholder="enter location"
									className="form-control"
								/>
							</div>
							<div className="col-md-6 col-sm-6">
								<label>Caption</label>
								<input
									type="text"
									name="caption"
									value={caption}
									onChange={(e) => {
										setCaption(e.target.value);
									}}
									placeholder="enter caption"
									className="form-control"
								/>
							</div>
						</div>
						<label></label>
						<select
							onChange={(e) => {
								setOccassion(e.target.value);
							}}
							className="form-select"
							aria-label="Default select example"
						>
							<option>select Occassion</option>
							<option value="Birthday">Birthday</option>
							<option value="Wedding">Wedding</option>
							<option value="Outing">Outing</option>
						</select>

						<label>Tags</label>
						<input
							type="text"
							name="tags"
							value={tags}
							onChange={(e) => {
								setTags(e.target.value);
							}}
							placeholder="enter tags"
							className="form-control"
						/>
						<label>Description</label>
						<input
							type="text"
							name="desc"
							value={desc}
							onChange={(e) => {
								setDesc(e.target.value);
							}}
							placeholder="enter description"
							className="form-control"
						/>
						<div className="p-4 d-flex justify-content-center">
							<button
								onClick={UpdateData}
								className="btn btn-info"
							>
								Update
							</button>
						</div>
					</div>
					<div className="p-4 card-footer d-flex flex-row justify-content-center">
						<button
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#NewPostModalImage"
							className="btn btn-success"
						>
							Add Image
						</button>
						<button
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#EditPostModalImage"
							className="ms-4 btn btn-primary"
						>
							Edit Image
						</button>
					</div>
				</div>
				<h4 className="text-center text-success">
					{succes ? succes : ''}
				</h4>
				<ImagePostEditModal
					message={(msg) => setSuccess(msg)}
					Id={props.match.params.id}
				/>
			</div>
		);
	} else {
		return <Loading />;
	}
};

export default PostEdit;
