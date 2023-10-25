import { useState, useEffect } from "react";
import useMovieSearch from "../../Hooks/useMovieSearch";
import { useForm } from "react-hook-form";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import "./Movies.css";

export default function Movies() {
  const [page, setPage] = useState(1);
  const { register, handleSubmit } = useForm();
  const [query, setQuery] = useState("pirate");
  const { data, loading, error } = useMovieSearch(query, page);

  const onSubmit = (formData) => {
    setQuery(formData.searchQuery);
  };

  const movieList = data?.results?.map((movie) => {
    const movieWithCustomType = { ...movie, media_type: "movie" };
    return (
      <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 ">
        <Card movie={movieWithCustomType} />
      </div>
    );
  });

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <section id="movies">
      <div className="container pt-5">
        <div className="search-bar ">
          <div className="container d-flex justify-content-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="search_home_form"
            >
              <div className="search-input d-flex align-items-center w-100">
                <button className="search_home_form_btn">
                  <SearchIcon />
                </button>
                <input
                  spellCheck="false"
                  className="search_home_form_input w-100"
                  type="text"
                  placeholder="Find Movies..."
                  {...register("searchQuery")}
                />
              </div>
            </form>
          </div>
        </div>
        <h1 className="mb-5">Movies</h1>
        <Loading loading={loading} error={error}>
          <div className="row">{movieList}</div>
        </Loading>
        <Stack container="true" spacing={2} alignItems="center">
          <Pagination count={20} page={page} onChange={handleChange} />
        </Stack>
      </div>
    </section>
  );
}
