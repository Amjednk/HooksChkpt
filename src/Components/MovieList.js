import React from 'react';
import MovieCard from './MovieCard';
/*function that maps all movies data and passes it to the card container*/
function MovieList({data}) {
    return(
        <div className='Cards'>{
        data.map( (el)=>(<div className='Card-grid'> 
            <MovieCard  data={el} /> </div>
        ))
        }
        </div>
    );
}


export default MovieList;