import React from 'react'
import { ApiMovieReviews } from 'service/ApiMovieReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MoviseReviews = () => {
	const { movieId } = useParams();
	const [movieReviews, setMovieReviews] = useState([]);


	useEffect(() => {

		const fetchMovieReviews = async () => {
			try {
				const SearchData = await ApiMovieReviews(movieId);
				setMovieReviews(SearchData);
			}
			catch {

			}
			finally {

			}
		}
		fetchMovieReviews();
	}, [movieId]);

	return (
		<ul>
			{movieReviews.map(({ author, content, id }) => (
				<li key={id}>
					<h3>Author: {author}</h3>
					<p>{content}</p>
				</li>
			))}
		</ul>
	)
}

export default MoviseReviews