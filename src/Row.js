import React from "react";
import axios from "./axios";
import { useState, useEffect } from "react";
import requests from "./requests";
import "./Style/Row.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //IF [] RUNS ONES WHEN THE ROWS LOAD DON'T RUN IT AGAIN.
    //asynonus code
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return requests;
    }
    fetchData();
  }, []);

  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* {several_row__poster } */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
