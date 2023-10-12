import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchMovies } from "service/Api";
import { HomeH1, HomeLi, HomeUl } from "./Home.styled";
import NoPoster from '../image/default_poster.jpg'


const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
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
		}
		fetchAllPosts();
	}, []);


	return (
		<div>
			<HomeH1>TRENDING TUDAY</HomeH1>
			<HomeUl>
				{movies.map(({ id, title, poster_path }) => {
					return (
						<HomeLi key={id}>
							<Link key={id} to={`/movie/${id}`}>
								{poster_path === null ? (
									<img src={NoPoster} alt={title} width="185" height="138" />
								) :
									(<img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={title}></img>)}
								<p>{title}</p>
							</Link>
						</HomeLi>)
				})}
			</HomeUl>
		</div>
	)
}
export default Home;