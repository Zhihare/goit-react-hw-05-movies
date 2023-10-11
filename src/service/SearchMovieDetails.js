import axios from "axios";


const url = "https://api.themoviedb.org/3/movie/";
const API_KEY = "b5d645c087122acd1f9d00fb83cd8499";

export const searchhMoviesDetails = async (movieID) => {

	try {
		const response = await axios.get(`${url}${movieID}`, {
			params: {
				api_key: API_KEY,
			}
		});
		return response.data;
	} catch (error) {
		console.error("Error:", error.message);
		throw error;
	}
}