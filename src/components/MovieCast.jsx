import React from 'react'
import { searchhMovieCast } from 'service/SearchMovieCast';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MovieCastUl } from './MovieCast.styled';
import defaultPhoto from '../image/defaultphoto.jpg'
import { Loader } from './Loader';

const MovieCast = () => {
	const { movieId } = useParams();
	const [movieCast, setMovieCast] = useState([]);
	const [isLoading, setIsLoading] = useState(false);


	useEffect(() => {
		const fetchMovieCast = async () => {
			try {
				setIsLoading(true);
				const SearchData = await searchhMovieCast(movieId);
				setMovieCast(SearchData);
			}
			catch (error) {
				alert(error.message);
			}
			finally {
				setIsLoading(false);
			}
		}
		fetchMovieCast();
	}, [movieId]);


	return (
		<MovieCastUl>
			{isLoading && (
				<Loader />)}
			{movieCast.map(({ id, name, profile_path, character }) =>
			(
				<li key={id}>
					{profile_path === null ? (
						<img src={defaultPhoto} alt={name} width="92" height="138" />
					) :
						(<img src={`https://image.tmdb.org/t/p/w92${profile_path}`} alt={name} />)}
					<h3>{name}</h3>
					<p>{character}</p>
				</li>
			))}
		</MovieCastUl>
	)
}

export default MovieCast