import { useEffect, useState } from "react";
import{useSearchParams} from 'react-router-dom'
import {ImSpinner} from 'react-icons/im'
import MovieCard from "../components/MovieCard";

const apiKEY ='api_key=e0f7312474706c4418b37e44e7781b91';
const searchURL = 'https://api.themoviedb.org/3/search/movie';
const moviesURL = 'https://api.themoviedb.org/3/discover/movie';
const Search = () => {
    const [searchParams] = useSearchParams();
  
    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");
  
    const getSearchedMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    };
  
    useEffect(() => {
      const searchWithQueryURL = `${searchURL}?${apiKEY}&query=${query}`;
      getSearchedMovies(searchWithQueryURL);
    }, [query]);
  
    return (
      <div className="container">
        <h2 className="title">
          Resultados para: <span className="query-text">{query}</span>
        </h2>
        <div className="movies-container">
          {movies.length > 0 &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    );
  };
  
  export default Search;