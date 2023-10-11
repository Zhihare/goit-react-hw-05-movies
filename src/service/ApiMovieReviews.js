import axios from "axios";


const url = "https://api.themoviedb.org/3/movie/";
const API_KEY = "b5d645c087122acd1f9d00fb83cd8499";

export const ApiMovieReviews = async (movieID) => {

	try {
		const response = await axios.get(`${url}${movieID}/reviews`, {
			params: {
				api_key: API_KEY,
			}
		});
		const { results } = response.data
		return results;
	} catch (error) {
		console.error("Error:", error.message);
		throw error;
	}
}