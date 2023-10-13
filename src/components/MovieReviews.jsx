import React from 'react'
import { ApiMovieReviews } from 'service/ApiMovieReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieReviewsUl } from './MovieReviews.styled';
import { Loader } from './Loader';


const MoviseReviews = () => {
	const { movieId } = useParams();
	const [movieReviews, setMovieReviews] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const fetchMovieReviews = async () => {
			try {
				const SearchData = await ApiMovieReviews(movieId);
				setMovieReviews(SearchData);
			}
			catch (error) {
				alert(error.message);
			}
			finally {
				setIsLoading(false);
			}
		}
		fetchMovieReviews();
	}, [movieId]);

	return (
		<MovieReviewsUl>
			{isLoading && (
				<Loader />)}
			{movieReviews === ![] ? (<p>Not information</p>) :
				(
					movieReviews.map(({ author, content, id }) => (
						<li key={id}>
							<h3>Author: {author}</h3>
							<p>{content}</p>
						</li>
					))
				)}
		</MovieReviewsUl>
	)
}

export default MoviseReviews