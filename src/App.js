import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Movies from "./Components/Movies/Movies";
import TvShows from "./Components/TvShows/TvShows";
import SearchPage from "./Components/SearchResult/SearchPage";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Celebs from "./Components/Celebs/Celebs";
import Pages from "./Components/Pages/Pages";
import Blogs from "./Components/Blogs/Blogs";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/search/:type/:query" element={<SearchPage />} />
        <Route path="/movie-details/:type/:id" element={<MovieDetails />} />
        <Route path="/celebs" element={<Celebs />} />
      </Routes>
    </Router>
  );
}

export default App;
