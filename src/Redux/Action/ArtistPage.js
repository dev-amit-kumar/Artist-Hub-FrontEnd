import axios from "axios";
const artist_url="http://localhost:3000/artist";
export const fetchArtist = () => async (dispatch) => {
	try {
		dispatch({
			type: 'GET_ARTIST',
			payload: {
				ArtistData:null
			},
		});

		const { data } = await axios.get(artist_url);
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