import styles from '../styles/MovieDetails.module.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import get from '../utils/httpClien';
import Spiner from '../components/Spiner';
import { getMovieImg } from '../utils/getMovieImg';


const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie,setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        setIsLoading(true)
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            setIsLoading(false);
        })
    },[movieId]) 
        
    if(isLoading){
        return <Spiner/>
    }

    const imagenURL = getMovieImg(movie.poster_path, 500)  
  
    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} 
                width={230}
                height={345}
                src={imagenURL}
                alt={movie.title}
            /> 

            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}><strong> Title:</strong> { movie.title } </p>
                <p><strong> Genres: </strong> 
                {movie.genres.map( genre => genre.name).join('-')} </p>
                <p><strong> Description:</strong> { movie.overview } </p>
            </div>
        </div>
    )
}

export default MovieDetails
