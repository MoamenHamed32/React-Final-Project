import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

import useSearchQuery from "../../Hooks/useSearchQuery";
import MoviesList from "../MoviesList/MoviesList";
import Loading from "../Loading/Loading";

export default function Movies() {
  const { register, watch, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const { type, query } = useParams();
  const { movies, loading, error } = useSearchQuery(type, query);
  const filterData = movies.filter((movie) => {
    movie.media_type = undefined;
  });
  console.log(movies);
  return (
    <section id="serach-page">
      <div className="search-bar ">
        <div className="container">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="search_home_form d-flex justify-content-between flex-lg-row  "
          >
            <div className="left-section">
              <Link
                className="search_home_form_btn"
                to={`/search/${watch("type")}/${watch("searchQuery")}`}
              >
                <SearchIcon />
              </Link>
              <input
                spellCheck="false"
                className="search_home_form_input"
                type="text"
                placeholder="Find movies tv shows documentary and more..."
                {...register("searchQuery")}
              />
            </div>
            <div className="right-section">
              <div className="select">
                <div className="select-logo">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <select
                  name=""
                  id=""
                  defaultValue="multi"
                  {...register("type")}
                >
                  <option value="multi" disabled hidden>
                    Media Type
                  </option>
                  <option value="movie">Movies</option>
                  <option value="tv">Tv Shows</option>
                  <option value="person">Person</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <Loading loading={loading} error={error}>
          <div className="row">
            <MoviesList movies={movies} />
          </div>
        </Loading>
      </div>
    </section>
  );
}
