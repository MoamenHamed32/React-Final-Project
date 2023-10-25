import useTvSearch from "../../Hooks/useTvSearch.js";
import { useForm } from "react-hook-form";
import Card from "../Card/Card.jsx";
import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
export default function Movies() {
  const [page, setPage] = useState(1);
  const { register, handleSubmit } = useForm();
  const [query, setQuery] = useState("friends");
  const { data, loading, error } = useTvSearch(query, page);

  const onSubmit = (formData) => {
    setQuery(formData.searchQuery);
    setPage(1);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const tvList = data?.results?.map((tvShow) => {
    const movieWithCustomType = { ...tvShow, media_type: "tv" };
    return (
      <div key={tvShow.id} className="col-lg-3 col-md-4 col-sm-6 ">
        <Card movie={movieWithCustomType} />
      </div>
    );
  });

  return (
    <section id="tv-shows">
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
                  placeholder="Find TV Shows ..."
                  {...register("searchQuery")}
                />
              </div>
            </form>
          </div>
        </div>
        <h1 className="mb-5">TV Shows</h1>

        <Loading loading={loading} error={error}>
          <div className="row">{tvList}</div>
        </Loading>
        <Stack container="true" spacing={2} alignItems="center">
          <Pagination
            count={data?.total_pages || 1}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </div>
    </section>
  );
}
