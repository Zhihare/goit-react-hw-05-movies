import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet, Routes, Route, NavLink, Link, useParams } from 'react-router-dom'
import { searchhMoviesDetails } from 'service/SearchMovieDetails'

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
				Back
			</NavLink>
			<div>
				<img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={`${title}`} />
				<h1>{title}</h1>
				{genres && genres.length > 0 && (
					<p>Genres:
						{genres.map(({ id, name }) => (
							<span key={id}> {name}</span>)
						)}
					</p>)}
				<h2>Overview</h2>
				<p>{overview}</p>

				<p>Realease date: {release_date}</p>
				<p>Popularity: {popularity}</p>
			</div>
			<Link to={`cast`}>
				Cast
			</Link>
			<Link to={`reviews`}>
				Reviews
			</Link>
			<Outlet />
		</div>
	)
}
