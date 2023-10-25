import React from "react";
import Card from "../Card/Card";
import CelebCard from "../CelebsCard/CelebCard";
import "./MovieList.css";

export default function MoviesList({ movies }) {
  const movieList = movies.slice(0, 8).map((movie) => {
    return (
      <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 ">
        {movie.known_for === undefined ? (
          <Card movie={movie} />
        ) : (
          <CelebCard data={movie} />
        )}
      </div>
    );
  });
  return <>{movieList}</>;
}
