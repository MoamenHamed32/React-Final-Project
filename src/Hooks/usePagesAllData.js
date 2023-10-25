import { useEffect, useState } from "react";
import axios from "axios";

function usePagesAllData(page) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "14bdd69ce887376edfafb09f23f78fe9";
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${page}`;

  useEffect(() => {
    async function fetchMovieTrending() {
      try {
        const response = await axios.get(url);
        setData(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchMovieTrending();
  }, [page, url]);

  return { data, loading, error };
}

export default usePagesAllData;
