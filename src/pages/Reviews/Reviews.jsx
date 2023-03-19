import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Spinner } from '../../components/Spinner';
import { FetchReviews } from '../../components/FetchData';
import { ReviewsList } from '../../components/ReviewsList/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);

    const getReviews = async () => {
      try {
        const reviewsData = await FetchReviews(movieId);

        setReviews(reviewsData.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {' '}
      {error && <p>{error}</p>}
      {loading && <Spinner />}
      {reviews.length !== 0 ? (
        <ul>
          <ReviewsList reviews={reviews} />
        </ul>
      ) : (
        <p>We don't find any review for this movie</p>
      )}
    </>
  );
};

export default Reviews;
