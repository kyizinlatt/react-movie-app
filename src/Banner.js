import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  //   function truncate(str, n) {
  //     return str.length > n ? str.substr(0, n - 1) + "..." : str;
  //   }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents container">
        <div className="row">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>
        </div>

        <div className="row">
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h1 className="banner__description">{movie.overview}</h1>
          </div>
        </div>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
