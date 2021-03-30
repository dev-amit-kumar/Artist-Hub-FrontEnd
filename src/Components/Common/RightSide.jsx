import '../../css/rightSideNav.css';
const RightSide = () => {
	return (
		<div className="container">
			<form className="mt-2">
				<div class="input-group mb-3">
					<input
						type="search"
						class="form-control"
						placeholder="Search post/user"
						aria-label="Search post/user"
						aria-describedby="button-search"
					/>
					<button
						class="btn btn-light"
						type="button"
						id="button-search"
					>
						<i class="fas fa-search"></i>
					</button>
				</div>
			</form>
		</div>
	);
};
export default RightSide;
