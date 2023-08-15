import React, { useState } from 'react';
import axios from 'axios';
import { Modal } from 'react-modal';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Busca a lista de filmes da API e atualiza o estado
  const fetchMovies = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: 'api_key=e0f7312474706c4418b37e44e7781b91',
      },
    });
    setMovies(response.data.results);
  };

  // Abre o modal com as informações do filme selecionado
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setModalIsOpen(true);
  };

  // Fecha o modal
  const handleCloseModal = () => {
    setSelectedMovie(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <h1>Lista de Filmes</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} onClick={() => handleMovieClick(movie)}>
            {movie.title}
          </li>
        ))}
      </ul>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} className="MovieModal">
  {selectedMovie && (
    <div className="MovieModal-image">
      <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title} />
    </div>
  )}
  {selectedMovie && (
    <div className="MovieModal-details">
      <h2>{selectedMovie.title}</h2>
      <p>{selectedMovie.overview}</p>
    </div>
  )}
  <button onClick={handleCloseModal}>Fechar</button>
</Modal>

    </div>
  );
};

export default MovieList;
