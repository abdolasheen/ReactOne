// import axios from "axios";
import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function Movies() {
  let [allMovies, setAllmovies] = useState([]);
  let [moiesDescreption, setDescreption] = useState(false);

  async function getAllMovies() {
    let { data } = await Axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=9501eb91e569d6515e458bccdcf5dd37&language=en-US&page=1"
    );
    console.log(data.results);
    setAllmovies(data.results);
  }
  function readMore() {
    setDescreption(true);
    // console.log(moiesDescreption[index].overview);
    // return moiesDescreption[index].overview;
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <>
      {allMovies.length > 0 ? (
        <div className="container mt-5 pt-5">
          <div className="row mt-2">
            {allMovies.map((movie, index) => (
              <div className="col-md-4" key={index}>
                <div className="movie">
                  <img
                    src={
                      `https://image.tmdb.org/t/p/w500/` + movie.backdrop_path
                    }
                    alt=""
                    className="w-100"
                  />
                  <h3>{movie.original_title}</h3>
                  <p>
                    {moiesDescreption
                      ? movie.overview
                      : movie.overview.split(" ").splice(0, 10).join(" ")}
                  </p>
                  <button
                    className="btn btn-info"
                    onClick={() => readMore(index)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="position-fixed top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
          <i className="fas fa-spinner fa-spin fa-2x"></i>
        </div>
      )}
    </>
  );
}
