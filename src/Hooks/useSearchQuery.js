import { useEffect, useState } from "react";
import axios from "axios";

function useSearchQuery(type, query) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSearchResult() {
      try {
        const apiKey = "14bdd69ce887376edfafb09f23f78fe9";
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/${type}?query=${encodeURI(
            query
          )}&page=1&api_key=${apiKey}`
        );
        setMovies(response.data.results.slice(0, 8));
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchSearchResult();
  }, [type, query]);

  return { movies, loading, error };
}

export default useSearchQuery;
