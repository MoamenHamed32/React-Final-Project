import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useForm } from "react-hook-form";
import useMovieTrending from "../../Hooks/useMovieTrending";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import Loading from "../Loading/Loading";
import Card from "../Card/Card";
import CelebCard from "../CelebsCard/CelebCard";

export default function Home() {
  //   const [page, setPage] = useState(1);
  const { data, loading, error, setPage, page } = useMovieTrending();
  const [filteredData, setFilteredData] = useState();
  const { register, watch, handleSubmit, getValues } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    if (data) {
      setFilteredData(data.results);
    }
  }, [data.results, data]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  useEffect(() => {
    if (getValues("filter") === "multi") return;
    const filteration = data?.results?.filter((item) => {
      return item.media_type === getValues("filter");
    });
    setFilteredData(filteration);
  }, [watch("filter")]);

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
          <div className="section-title d-flex justify-content-between align-items-center w-100">
            <h4 className="title m-0">All Movies , TV Shows & Celebrities</h4>
            <form>
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
                  {...register("filter")}
                >
                  <option value="multi" disabled hidden>
                    Media Type
                  </option>
                  <option value="movie">Movies</option>
                  <option value="tv">Tv Shows</option>
                </select>
              </div>
            </form>
          </div>
          <Loading loading={loading} error={error}>
            <div className="row">
              {filteredData?.map((data) => {
                if (data.media_type === "person") {
                  return (
                    <div key={data.id} className="col-lg-3 col-md-4 col-sm-6">
                      <CelebCard data={data} />
                    </div>
                  );
                } else {
                  return (
                    <div key={data.id} className="col-lg-3 col-md-4 col-sm-6">
                      <Card movie={data} />
                    </div>
                  );
                }
              })}
            </div>
          </Loading>
          <Stack
            container="true"
            className="mb-2"
            spacing={2}
            alignItems="center"
          >
            <Pagination count={500} page={page} onChange={handleChange} />
          </Stack>
        </div>
      </div>
    </section>
  );
}
