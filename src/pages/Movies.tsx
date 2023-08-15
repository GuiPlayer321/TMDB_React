import { useState, useEffect } from "react";
import Api_Key from "../config/key";

export function Movies(){

    const [movies, setMovies] = useState([]);

    useEffect(() =>{
      fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${Api_Key}`)
        .then (response => response.json())
        .then(data => setMovies(data.result))
    },[])
    
    return(
       <h2>Ola</h2>
    );
}