import { useState, useEffect } from "react";
import {ImSpinner} from 'react-icons/im'
import MovieCard from "../components/MovieCard";
import MovieList from "./MovieList";

const moviesURL = 'https://api.themoviedb.org/3/discover/movie';
const apiKEY ='api_key=e0f7312474706c4418b37e44e7781b91';


export function Home(){

    const [topmovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url: RequestInfo | URL) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    }

    useEffect(() =>{

        const topRatedURL = `${moviesURL}?sort_by=popularity.desc&${apiKEY}&language=pt-BR`;

        getTopRatedMovies(topRatedURL);

    },[])

    return(
        <div className="container">

            <h2 className="title">Melhores filmes:</h2>
            <div className="movies-container">
                {topmovies.length === 0 && <p><ImSpinner/> Carregando...</p>}
                {topmovies.length > 0 && topmovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
}