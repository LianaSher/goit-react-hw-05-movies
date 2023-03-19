import PropTypes from 'prop-types';

export const ReviewsList = ({ reviews }) => {
  return reviews.map(({ author, id, content }) => (
    <li key={id}>
      <p>Author: {author}</p>
      <p>{content}</p>
    </li>
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
