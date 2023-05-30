import React, { useState , useEffect} from 'react';
import axios from 'axios';
import "./Row.css";
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url = "http://image.tmdb.org/t/p/original/";
const baseURL ="https://api.themoviedb.org/3";

function Row({title, fetchUrl, isLargeRow}) {
    const [Movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [SelectedMovie, setSelectedMovie] = useState(null);
  

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`${baseURL}`+fetchUrl);//`${baseURL}`+fetchUrl
            setMovies(request.data.results);
            return request;
             // 'https://api.themoviedb.org/3/discover/tv?api_key=201f38d2a01bbee05cd5aec0b429b77a&with_networks=213'
        }
        fetchData();
        /*axios.get(fetchUrl).then(response => {
          setMovies(response.data.results)
        }).catch(err => {console.log(err)})*/
    }, [fetchUrl]);//fetchUrl = `/discover/tv?api_key=201f38d2a01bbee05cd5aec0b429b77a&with_networks=213`

    console.table(Movies);
    
    const opts = {
      height: "390",
      width: "100%",
      playerVars: {

        autoplay: 1,
      },
    };

    const handleClick = (movie) => {
      
      if (trailerUrl ||( SelectedMovie === movie)){
        setSelectedMovie(null);
        setTrailerUrl('');
      }else{
        setSelectedMovie(movie);
      }
    };

    const ShowTrailer = (movie) => {
      
      if (trailerUrl) {
        setTrailerUrl('');
      } else {
        movieTrailer(movie?.name || movie?.title  || movie?.original_name || movie?.id || "")
        .then( (url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));

        })
        .catch((error) => {
        console.log(error)
        setTrailerUrl('');
        });
      }
      
      
    };

    function truncate(str, n) {
      if (str?.length > n) {
        return str.substr(0, n - 1) + "...";
      } else {
        return str;
      }
    }


  return (
    <div className="row">
       <h2>{title}</h2>

       <div className="row__list">
          {Movies.map(movie => (
            <img 
            key={movie.id}
            onClick={() => handleClick(movie)}
            // className= {`row__poster ${isLargeRow && "row__posterLarge"}` } 
            className = "row__posterLarge"
            src={`${base_url}${movie.poster_path  }`} 
              /*isLargeRow ? movie.poster_path : movie.backdrop_path*/
            alt={movie.name}
            /> 
          ))} 
       </div>

       {SelectedMovie && (<div className="movie__details" 
            style={{
             backgroundSize: "cover",
             backgroundImage:  `url(
                http://image.tmdb.org/t/p/original/${SelectedMovie?.backdrop_path })`,                         
             backgroundPosition: "center center"
             }}>

             {!trailerUrl? (<div className='movie__contents'>
                <h2 className='movie__title'>{SelectedMovie?.name || SelectedMovie?.title  || SelectedMovie?.original_name}</h2>
                <button className='trailer__button' onClick={() => ShowTrailer(SelectedMovie)}>Trailer</button>
                <p className='movie__desc'>{truncate(SelectedMovie?.overview , 400)}</p>
               </div>) :  (
                  <div className='movie__details' >
                     <Youtube videoId={trailerUrl} opts={opts} />
                  </div>)
              }
              
       </div>  )}     

       
    </div>
  );
}

export default Row;

