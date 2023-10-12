import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet, Routes, Route, NavLink, Link, useParams } from 'react-router-dom'
import { searchhMoviesDetails } from 'service/SearchMovieDetails'
import { MovieDetailsButtonBack, MovieDetailsContainer } from './MovieDetails.styled'

export const MovieDetails = () => {
	const { movieId } = useParams();
	const [movieInfo, setMovieInfo] = useState([]);


	useEffect(() => {
		const fetchMovie = async () => {
			try {
				const SearchData = await searchhMoviesDetails(movieId);
				setMovieInfo(SearchData);
				return SearchData;
			}
			catch {

			}
			finally {

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
				<img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={`${title}`} />
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
