import axios from 'axios';
import { useState } from 'react';
import { base_url, configHeader } from '../../../Redux/config';

const Detail = (props) => {
	const [name, setName] = useState(props.Name);
	const [occassion, setOccassion] = useState(
		props.Occassion ? props.Occassion[0] : '',
	);
	const [occassion2, setOccassion2] = useState(
		props.Occassion ? props.Occassion[1] : '',
	);
	const [occassion3, setOccassion3] = useState(
		props.Occassion ? props.Occassion[2] : '',
	);
	const [shortDesc, setshortDesc] = useState(props.Desc);

	const saveData = () => {
		var Occassion = [];
		Occassion.push(occassion);
		Occassion.push(occassion2);
		Occassion.push(occassion3);

		const data = {
			name: name,
			occassion: Occassion,
			shortDesc: shortDesc,
		};
		console.log(data, 'data');
		axios
			.post(`${base_url}/artist/editDetails`, data, configHeader)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	const renderOccassion = (data) => {
		if (data) {
			return data.map((val, idx) => {
				if (idx !== data.length - 1) {
					return (
						<span key={idx} className="text-capitalize fw-bold">
							{val},&nbsp;
						</span>
					);
				} else {
					return (
						<span key={idx} className="text-capitalize fw-bold">
							{val}
						</span>
					);
				}
			});
		} else {
			return <></>;
		}
	};
	return (
		<div className="container">
			<div className="d-flex flex-row justify-content-between align-items-center flex-wrap">
				<h3 className="text-muted">{props.Name}</h3>
				<span>
					<b
						className="text-muted"
						type="button"
						data-bs-toggle="modal"
						data-bs-target="#ModalBoxFollow"
					>
						{props.followerDetail.length} Follower
					</b>
					&nbsp;&nbsp;
					<b
						className="text-muted"
						type="button"
						data-bs-toggle="modal"
						data-bs-target="#ModalBoxFollowing"
					>
						{props.followingDetail.length} Following
					</b>
					&emsp;
					{props.Id !== localStorage.getItem('userId') ? (
						<button
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#ModalBoxDetail"
							className="btn btn-outline-primary"
						>
							Edit Profile <i className="fas fa-pen"></i>
						</button>
					) : (
						<button className="btn btn-outline-primary">
							Hire <i className="fas fa-user-plus"></i>
						</button>
					)}
				</span>
			</div>
			<p className="hideOn650">{renderOccassion(props.Occassion)}</p>
			<div
				className="modal fade"
				id="ModalBoxDetail"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Edit Detail
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<input
								onChange={(e) => {
									setName(e.target.value);
								}}
								name="name"
								type="text"
								placeholder="name"
								className="form-control mb-2"
							/>
							<div className="form-check form-check-inline">
								<input
									onChange={(e) => {
										setOccassion2(e.target.value);
									}}
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox1"
									value="Birthday"
								/>
								<label
									className="form-check-label"
									htmlFor="inlineCheckbox1"
								>
									Birthday
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									onChange={(e) => {
										setOccassion3(e.target.value);
									}}
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="Wedding"
								/>
								<label
									className="form-check-label"
									htmlFor="inlineCheckbox2"
								>
									Wedding
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									onChange={(e) => {
										setOccassion(e.target.value);
									}}
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox3"
									value="Outing"
								/>
								<label
									className="form-check-label"
									htmlFor="inlineCheckbox3"
								>
									Outing
								</label>
							</div>
							<input
								onChange={(e) => {
									setshortDesc(e.target.value);
								}}
								type="text"
								name="detail"
								placeholder="details"
								className="form-control"
							/>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button
								onClick={saveData}
								type="button"
								className="btn btn-primary"
							>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade"
				id="ModalBoxFollow"
				tabIndex="-1"
				aria-labelledby="ModalBoxFollow"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="ModalBoxFollowLabel"
							>
								Follow
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							{props.followerDetail.length
								? props.followerDetail.map((val, idx) => {
										return <p key={idx}>{val.userId1}</p>;
								  })
								: 'No follower list'}
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade"
				id="ModalBoxFollowing"
				tabIndex="-1"
				aria-labelledby="ModalBoxFollowing"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="ModalBoxFollowingLabel"
							>
								Following
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							{props.followingDetail.length
								? props.followingDetail.map((val, idx) => {
										return <p key={idx}>{val.userId1}</p>;
								  })
								: 'No following list'}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
