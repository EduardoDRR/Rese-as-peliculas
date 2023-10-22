import { MovieCard } from './MovieCard';
import styles from '../styles/CoontextMovieCard.module.css'
import { useEffect, useState } from 'react';
import get from '../utils/httpClien';
import Spiner from '../components/Spiner';
import InfiniteSctroll from 'react-infinite-scroll-component'
import { Empty } from './Empty'


export function ContextMovieCard({search}){ //eslint-disable-line
    
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page,setPage] = useState(1);
    const [hasMore,setHasMore] = useState(true);

    
   
    useEffect(()=>{
        setIsLoading(true)
        const searchURL = search 
        ? "/search/movie?query=" + search  + "&page=" + page
        : "/discover/movie?page=" + page;
        get(searchURL).then(data=>{""
               setMovies(prevMovie => prevMovie.concat(data.results))
               setHasMore(data.page < data.total_pages);
               console.log(data.results)
        });
        setIsLoading(false);
    },[search, page]);

    if(!isLoading && movies.length == 0){
        return <Empty/>
    }
    
    return (
        <InfiniteSctroll
        dataLength={movies.length}
        hasMore={hasMore}
        next={() => setPage((prevPage) => prevPage + 1)}
        loader={<Spiner/>}
        >
            <ul className={styles.moviesGrid}>
                {
                    movies.map((movie)=> (
                        <MovieCard key={movie.id} movie={movie}/>      
                    ))
                }    
            </ul>
        </InfiniteSctroll>
        
    )
}

//API_KEY=f4657ee8b584296594b2ed5c841f9919