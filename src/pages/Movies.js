import { useState } from "react";
import { searchhMovies } from "service/ApiSearchMovies";
import { Link, NavLink } from "react-router-dom";

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
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search movies"
					onChange={handlSearcheChenge}
				/>
				<button type="submit" >Searche</button>
			</form>
			<ul>
				{dataMovies.map(searchMovie => {
					return (
						<li key={searchMovie.id}>
							<Link key={searchMovie.id} to={`/movie/${searchMovie.id}`}>
								{searchMovie.title}
							</Link>
						</li>)
				})}
			</ul>
		</div>
	)
}
export default Movies;