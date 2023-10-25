import { useEffect, useState } from "react";
import axios from "axios";

const useMoviesDetails = (type, id) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "14bdd69ce887376edfafb09f23f78fe9";
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
        );
        setMovie(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, type]);

  return { movie, error, loading };
};

export default useMoviesDetails;
