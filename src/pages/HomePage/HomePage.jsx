import { useState, useEffect } from 'react';

import { Spinner } from '../../components/Spinner';
import { FetchTrending } from '../../components/FetchData';
import { MoviesList } from '../../components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchTrendingMovies = async () => {
      try {
        const trendingMovies = await FetchTrending();

        setMovies(trendingMovies.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {loading && <Spinner />}
      {error && <p>{error}</p>}
      <ul>{movies.length > 0 && <MoviesList movies={movies} />}</ul>
    </>
  );
};

export default HomePage;
