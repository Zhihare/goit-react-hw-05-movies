import { useEffect, useState } from "react";
import { searchhMovies } from "service/ApiSearchMovies";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { HomeLi, HomeUl } from "./Home.styled";
import { MoviesForm } from "./Movies.styled";
import NoPoster from '../image/default_poster.jpg';
import { Loader } from "components/Loader";

const Movies = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const search = searchParams.get('search');
	const [dataMovies, setDataMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation()

	const handleSubmit = event => {
		event.preventDefault();
		const SearchInfo = event.currentTarget.elements.searchMovie.value;
		setSearchParams({ search: SearchInfo });

		if (search === '') {
			alert('Заповніть поле пошуку');
			return;
		}
	}

	useEffect(() => {
		if (!search) return;
		const fetchMovie = async () => {
			try {
				setIsLoading(true);
				const SearchData = await searchhMovies(search);
				setDataMovies(SearchData);
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
	}, [search])





	return (
		<div>
			<MoviesForm onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search movies"
					name="searchMovie"
				/>
				<button type="submit" >Searche</button>
			</MoviesForm>
			<HomeUl>
				{isLoading && (
					<Loader />)}
				{
					dataMovies.map(({ id, title, poster_path }) => {
						return (
							<HomeLi key={id}>
								<Link state={{ from: location }}
									key={id}
									to={`/movie/${id}`}>
									{poster_path === null ? (
										<img src={NoPoster} alt={title} width="185" height="300" />
									) :
										(<img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={title}></img>)}
									<p>{title}</p>
								</Link>
							</HomeLi>)
					})
				}
			</HomeUl>
		</div>
	)
}

export default Movies;