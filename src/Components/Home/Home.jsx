import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useForm } from "react-hook-form";
import useMovieTrending from "../../Hooks/useMovieTrending";

import MoviesList from "../MoviesList/MoviesList";

import "./Home.css";
import Loading from "../Loading/Loading";

export default function Home() {
  const { register, watch, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(watch().searchQuery);

  const { data, loading, error } = useMovieTrending(1);
  console.log(data);
  console.log(watch());
  return (
    <section id="home">
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
      <div className="popular-movies">
        <div className="container">
          <h4 className="title">Latest Movies & TV Shows</h4>
          <Loading loading={loading} error={error}>
            <div className="row">
              <MoviesList movies={data.results} />
            </div>
          </Loading>
        </div>
      </div>
    </section>
  );
}
