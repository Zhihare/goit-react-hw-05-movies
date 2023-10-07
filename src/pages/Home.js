import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchMovies } from "service/Api";


const Home = () => {
	const [movies, setMovies] = useState([]);

	const fetchAllPosts = async () => {
		try {
			// setIsLoading(true);
			const postsData = await fetchMovies();
			setMovies(postsData);
			return postsData

			// setPosts(postsData);
		} catch (error) {
			// setError(error.message);
		} finally {
			// setIsLoading(false);
		}
	};
	fetchAllPosts();

	return (
		<div>
			<div>Trending tuday</div>
			<ul>
				{movies.map(movie => {
					return (
						<li key={movie.id}>
							<Link key={movie.id} to={movie.title}>
								{movie.title}
							</Link>
						</li>)
				})}
			</ul>
		</div>
	)
}
export default Home;