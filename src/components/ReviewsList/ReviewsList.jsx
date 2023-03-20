import PropTypes from 'prop-types';

import { ReviewsItem, Author } from '../ReviewsList/ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return reviews.map(({ author, id, content }) => (
    <ReviewsItem key={id}>
      <Author>Author: {author}</Author>
      <p>{content}</p>
    </ReviewsItem>
  ));
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      id: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
};
