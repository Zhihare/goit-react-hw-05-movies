import axios from "axios";


const url = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "b5d645c087122acd1f9d00fb83cd8499";

export const searchhMovies = async (query) => {

	try {
		const response = await axios.get(url, {
			params: {
				api_key: API_KEY,
				query,
			}
		});
		return response.data.results;
	} catch (error) {
		console.error("Error:", error.message);
		throw error;
	}
}