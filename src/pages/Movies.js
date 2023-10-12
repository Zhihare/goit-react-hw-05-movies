import { useState } from "react";
import { searchhMovies } from "service/ApiSearchMovies";
import { Link, NavLink } from "react-router-dom";
import { HomeLi, HomeUl } from "./Home.styled";
import { MoviesForm } from "./Movies.styled";
import NoPoster from '../image/default_poster.jpg';

const Movies = () => {
	const [search, setSearch] = useState('');
	const [dataMovies, setDataMovies] = useState([]);

	const handlSearcheChenge = event => {
		setSearch(event.currentTarget.value.toLowerCase());
	}

	const handleSubmit = event => {
		event.preventDefault();

		if (search === '') {
			alert('Заповніть поле пошуку');
			return;
		}
		fetchMovie();
		setSearch('')

	}

	const fetchMovie = async () => {
		try {
			const SearchData = await searchhMovies(search);
			setDataMovies(SearchData);
			return SearchData;
		}
		catch {

		}
		finally {

		}
	}

	return (
		<div>
			<MoviesForm onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search movies"
					onChange={handlSearcheChenge}
				/>
				<button type="submit" >Searche</button>
			</MoviesForm>
			<HomeUl>
				{dataMovies.map(({ id, title, poster_path }) => {
					return (
						<HomeLi key={id}>
							<Link key={id} to={`/movie/${id}`}>
								{poster_path === null ? (
									<img src={NoPoster} alt={title} width="185" height="300" />
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
export default Movies;