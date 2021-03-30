import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/rightSideNav.css';
import { findByKeyword } from '../../Redux/Actions';
const RightSide = () => {
	const [keyword, setKeyword] = useState('');
	const [error, setError] = useState('');
	const [searchList, setList] = useState([]);
	const [page_no, setPage] = useState(1);

	const searchHandler = (e) => {
		e.preventDefault();
		if (keyword !== '') {
			findByKeyword(keyword, page_no, (err, reply) => {
				if (err) {
					setError(err);
				} else {
					setList(reply);
				}
			});
		} else {
			setList([]);
		}
	};

	const changeHandler = (e) => {
		setKeyword(e.target.value);
		if (e.target.value === '') {
			setList([]);
		} else {
			findByKeyword(e.target.value, page_no, (err, reply) => {
				if (err) {
					setError(err);
				} else {
					setList(reply);
				}
			});
		}
	};

	return (
		<div className="container">
			<form className="mt-2" onSubmit={searchHandler}>
				<div class="input-group mb-3">
					<input
						type="search"
						class="form-control text-capitalize"
						placeholder="Search post/user"
						value={keyword}
						aria-label="Search post/user"
						aria-describedby="button-search"
						onChange={changeHandler}
					/>
					<button
						class="btn btn-light"
						type="submit"
						id="button-search"
					>
						<i class="fas fa-search"></i>
					</button>
				</div>
				<div className="searchResult">
					{!error ? (
						searchList.map((data) => {
							return (
								<Link to={`/artist/${data._id}`} key={data._id}>
									<div>
										<img
											src={
												data.profilePic
													? data.profilePic
													: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
											}
											alt="user image"
											width="30"
											height="30"
											className="me-2 rounded-circle"
										/>
										<b className="text-capitalize">
											{data.name}
										</b>
									</div>
								</Link>
							);
						})
					) : (
						<div>{error}</div>
					)}
				</div>
			</form>
		</div>
	);
};
export default RightSide;
