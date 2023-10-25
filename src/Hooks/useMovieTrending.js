import { useEffect, useState } from "react";
import axios from "axios";

function useMovieTrending() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchMovieTrending() {
      try {
        const apiKey = "14bdd69ce887376edfafb09f23f78fe9";
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${page}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchMovieTrending();
  }, [page]);

  return { data, loading, error, setPage, page };
}

export default useMovieTrending;
