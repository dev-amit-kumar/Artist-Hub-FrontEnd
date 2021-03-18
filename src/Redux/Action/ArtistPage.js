import axios from "axios";
const artist_url="https://artist-hub-api.herokuapp.com/artist/getDetails";

const configHeader = {
	headers: {
		'Content-Type': 'application/json',
		'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTBkMmMxMzg0OGRiMDAxNTI4N2Q0YyIsImlhdCI6MTYxNTkwOTU4NCwiZXhwIjoxNjE1OTk1OTg0fQ.xmJYG3N0Z7CA28bFb5zJkaMMnY3GHLEZ2h1P1ZzYyFY",
	},
};
export const fetchArtist = () => async (dispatch) => {
	try {
		dispatch({
			type: 'GET_ARTIST',
			payload: {
				ArtistData:null
			},
		});

		const { data } = await axios.get(artist_url,configHeader);
		dispatch({
			type: 'GET_ARTIST',
			payload: {
				ArtistData:data
			},
		});
	} catch (error) {
		console.log(error)
	}
};