import React from 'react'
import { searchhMovieCast } from 'service/SearchMovieCast';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieCast = () => {
	const { movieId } = useParams();
	const [movieCast, setMovieCast] = useState([]);


	useEffect(() => {
		const fetchMovieCast = async () => {
			try {
				const SearchData = await searchhMovieCast(movieId);
				setMovieCast(SearchData);
			}
			catch {

			}
			finally {

			}
		}
		fetchMovieCast();
	}, [movieId]);


	return (
		<ul>
			{movieCast.map(({ id, name, profile_path, character }) =>
			(
				<li key={id}>
					<img src={`https://image.tmdb.org/t/p/w92${profile_path}`} alt={name} />
					<h3>{name}</h3>
					<p>{character}</p>
				</li>
			))}
			<div>MovieCast</div>
		</ul>
	)
}

export default MovieCast