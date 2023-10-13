import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet, NavLink, Link, useParams } from 'react-router-dom'
import { searchhMoviesDetails } from 'service/SearchMovieDetails'
import { MovieDetailsButtonBack, MovieDetailsContainer } from './MovieDetails.styled'
import { Loader } from './Loader'

export const MovieDetails = () => {
	const { movieId } = useParams();
	const [movieInfo, setMovieInfo] = useState([]);
	const [isLoading, setIsLoading] = useState(false);


	useEffect(() => {
		const fetchMovie = async () => {
			try {
				setIsLoading(true);
				const SearchData = await searchhMoviesDetails(movieId);
				setMovieInfo(SearchData);
				return SearchData;
			}
			catch (error) {
				alert(error.message);
			}
			finally {
				setIsLoading(false);
			}
		}
		fetchMovie();
	}, [movieId]);


	const { release_date, popularity, poster_path, title, overview, genres } =
		movieInfo;

	return (
		<div>
			<NavLink to="/">
				<MovieDetailsButtonBack> Back</MovieDetailsButtonBack>
			</NavLink>
			<MovieDetailsContainer>
				{isLoading && (
					<Loader />)}
				<img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={`${title}`} height={'300px'} />
				<div>
					<h2>{title}</h2>
					<p>Realease date:<span> {release_date}</span></p>
					<p>Popularity:<span> {popularity}</span></p>
					{genres && genres.length > 0 && (
						<p>Genres:
							{genres.map(({ id, name }) => (
								<span key={id}> {name}</span>)
							)}
						</p>)}
					<Link to={`cast`}>
						<button>Cast</button>
					</Link>
					<Link to={`reviews`}>
						<button>Reviews</button>
					</Link>
					<h3>Overview</h3>
					<p>{overview}</p>
				</div>
			</MovieDetailsContainer>
			<Outlet />
		</div>
	)
}
