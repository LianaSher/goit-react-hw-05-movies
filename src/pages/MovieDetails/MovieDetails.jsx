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

import {
  MovieContainer,
  Image,
  Info,
  Title,
  TextContent,
  SubTitle,
  GoBackBtn,
  ItemLink,
} from '../MovieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const [singleMovie, setSingleMovie] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const { from } = location.state;

  const navigate = useNavigate();

  const goBack = () => navigate(location.state?.from ?? '/movies');

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
        <MovieContainer>
          <Info>
            <Image
              src={poster_path ? `${IMAGE_URL}${poster_path}` : `${noImage}`}
              alt="poster"
            />
            <div>
              <Title>{title}</Title>
              <TextContent>User score: {vote_average}</TextContent>

              <SubTitle>Overview</SubTitle>
              <TextContent>{overview}</TextContent>
              <SubTitle>Genres</SubTitle>
              <TextContent>
                {genres && `${genres.map(genre => genre.name).join(' ')}`}
              </TextContent>
              <GoBackBtn type="button" onClick={goBack}>
                Go back
              </GoBackBtn>
            </div>
          </Info>
          <div>
            <SubTitle>Additional information</SubTitle>
            <ul>
              <ItemLink>
                <Link state={{ from }} to={`/movies/${movieId}/cast`}>
                  Cast
                </Link>
              </ItemLink>
              <ItemLink>
                <Link state={{ from }} to={`/movies/${movieId}/reviews`}>
                  Reviews
                </Link>
              </ItemLink>
            </ul>
            <Outlet />
          </div>
        </MovieContainer>
      )}
    </>
  );
};

export default MovieDetails;
