import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ movie }) {
  return (
    <Link
      to={`/movie-details/${movie.media_type}/${movie.id}`}
      className="movie-card"
    >
      <span className="movie-rate">
        {movie.vote_average?.toFixed(1) || 0.0}
      </span>
      <figure className="movie-img">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "/noImage.png"
          }
          alt={movie.title}
          title={movie.title}
        />
      </figure>
      <h5 className="movie-title">{movie.title || movie.original_name}</h5>
    </Link>
  );
}
