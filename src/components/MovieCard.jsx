import { Link } from 'react-router-dom';
import styles from '../styles/MovieCard.module.css'
import { getMovieImg } from '../utils/getMovieImg';

export function MovieCard({ movie }){   //eslint-disable-line
    const imagenURL = getMovieImg(movie.poster_path ,300) //eslint-disable-line
   
   
    return (<li className={styles.movieCard}> 
        <Link to={'/movies/' + movie.id}> {/*eslint-disable-line */}
        <img className={styles.movieImage}
            width={230}
            height={345}
            src={imagenURL}
            alt={movie.title}/> {/*   eslint-disable-line */}
        <div className={styles.movieTitulo}> {movie.title} </div>  {/*   eslint-disable-line */}
        </Link> 
    </li> )  //eslint-disable-line
}

