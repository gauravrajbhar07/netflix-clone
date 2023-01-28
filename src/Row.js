import React from "react";
import axios from "./axios";
import { useState, useEffect } from "react";
import requests from "./requests";
import "./Style/Row.css";
// import YouTube from 'react-youtube';
// import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {

  const [movies, setMovies] = useState([]);
  // const [trailerUrl,setTrailerUrl] = useState("");


  useEffect(() => {
    //IF [] RUNS ONES WHEN THE ROWS LOAD DON'T RUN IT AGAIN.
    //asynonus code
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return requests;
    }
    fetchData();
  }, [fetchURL]);

  // const opts = {
  //   height: '390',
  //   width: '640',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };


  // const handleClick = (movie) => {
  //   if(trailerUrl){
  //     console.log(trailerUrl)
  //       setTrailerUrl("")
  //   }else{  
  //     console.log(trailerUrl)
  //       movieTrailer(movie?.name || "")
  //           .then((url) => {
  //               // https://www.youtube.com/watch?v=uKrQj_ht3F8
  //               const urlParams = new URLSearchParams(new URL(url).search)
  //               const x = urlParams.get("v");
  //               // console.log(x)
  //               setTrailerUrl(x)
  //               // console.log(urlParams)
  //           })
  //           .catch((error) => {
  //             console.log("hllo")
  //             console.log(error)})
  //   }
  // }


  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* {several_row__poster } */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            // onClick={()=>handleClick(movie)}
            className={`row_poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>} */}
    </div>
  );
}

export default Row;
