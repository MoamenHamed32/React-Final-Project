import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Loading from "../Loading/Loading";

import "./MovieDetails.css";
import useMoviesDetails from "../../Hooks/useMovieDetails";
import { useParams } from "react-router-dom";

export default function Movies() {
  const { type, id } = useParams();
  const { movie, loading, error } = useMoviesDetails(type, id);
  return (
    <Loading loading={loading} error={error}>
      <section id="movie-details">
        <div className="backdrop">
          <figure className="backdrop-img">
            <img
              src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie?.backdrop_path}`}
              alt=""
            />
          </figure>
          <div className="movie-info ">
            <div className="container d-flex gap-5">
              <figure className="movie-img">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                  alt=""
                />
              </figure>
              <div className="movie-body d-flex flex-column  justify-content-between">
                <div className="top">
                  <h5 className="release-year">
                    {movie?.release_date?.slice(0, 4) ||
                      movie?.last_air_date?.slice(0, 4)}
                  </h5>
                  <h1 className="movie-title">
                    {movie?.title || movie?.original_name}
                  </h1>
                  <p className="movie-desc">{movie?.overview}</p>
                  <div className="movie-actions d-flex gap-4 align-items-center  ">
                    <a
                      href={movie?.homepage || ""}
                      className="trailer d-flex align-items-center gap-2 text-decoration-none text-light"
                    >
                      <PlayCircleOutlineIcon />
                      <span className="trailer-text">WATCH THE TRAILER</span>
                    </a>
                    <span>|</span>
                    <span className="more">
                      {`${Math.floor(movie?.runtime / 60)}h ${
                        movie?.runtime % 60
                      }min`}{" "}
                      •{" "}
                      {movie?.genres.map((item) => (
                        <span key={item.id} className="mx-1">
                          {item.name}
                        </span>
                      ))}{" "}
                      • {movie?.release_date || movie?.last_air_date}
                    </span>
                  </div>
                </div>
                <div className="bottom">
                  <div className="more-details d-flex justify-content-between align-items-end">
                    <div className="left d-flex gap-3">
                      <div className="rate d-flex align-items-end">
                        <h2>{movie?.vote_average.toFixed(1)}</h2>
                        <span>IMDb</span>
                      </div>
                      <div className="status">
                        <span>Status</span>
                        <h5>{movie?.status}</h5>
                      </div>
                    </div>
                    <div className="right d-flex gap-3">
                      <button className="add">+</button>
                      <button className="favorite">
                        <FavoriteBorderIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Loading>
  );
}
