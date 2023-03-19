import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';

import { FetchSingleMovie, IMAGE_URL } from '../../components/FetchData';
import noImage from '../../images/noImage.jpg';

export const MovieDetails = () => {
  const [singleMovie, setSingleMovie] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const { from } = location.state;

  const navigate = useNavigate();

  const goBack = () => navigate(location.state.from);

  useEffect(() => {
    setLoading(true);
    const fetchSingleMovie = async () => {
      try {
        const singleMovieData = await FetchSingleMovie(movieId);
        setSingleMovie(singleMovieData.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleMovie();
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = singleMovie;

  return (
    <>
      {loading && <p>...is loading</p>}
      {error && <p>somthing wrong</p>}
      {singleMovie && !error && (
        <div>
          <img
            src={poster_path ? `${IMAGE_URL}${poster_path}` : `${noImage}`}
            alt="poster"
            width="100"
          />
          <div>
            <h2>{title}</h2>
            <p>User score: {vote_average}</p>

            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genres && `${genres.map(genre => genre.name).join(',')}`}</p>
            <button type="button" onClick={goBack}>
              Go back
            </button>
          </div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link state={{ from }} to={`/movies/${movieId}/cast`}>
                Cast
              </Link>
            </li>
            <li>
              <Link state={{ from }} to={`/movies/${movieId}/reviews`}>
                Reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </>
  );
};
