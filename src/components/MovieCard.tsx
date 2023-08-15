import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import Modal from './Modal';
import React,{useState} from 'react' 

const imgURL = 'https://image.tmdb.org/t/p/w500';


const MovieCard = ({movie, showLink = true}) => {

    

    const[isModalVisible, setIsModalVisible] = useState(false);

    return(
        <div className='movie-card'>
            

            <img src={imgURL + movie.poster_path} alt={movie.title} className='poster' />
            <h3>{movie.title}</h3>
            <button onClick={() => setIsModalVisible(true)} className='Modalbutton'>Detalhes</button>
        {isModalVisible ? (
          <Modal onClose={() => setIsModalVisible(false)} image={imgURL + movie.poster_path }>
            <p>{movie.overview}</p>
          </Modal>
        ) : null }
           
        </div>
    );
}

export default MovieCard;