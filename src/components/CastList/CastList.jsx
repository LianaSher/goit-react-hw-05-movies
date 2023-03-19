import PropTypes from 'prop-types';
import { IMAGE_URL } from '../../components/FetchData';
import noImage from '../../images/noImage.jpg';

export const CastList = ({ castItems }) => {
  return castItems.map(({ name, character, cast_id, profile_path }) => (
    <li key={cast_id}>
      <img
        src={profile_path ? `${IMAGE_URL}${profile_path}` : `${noImage}`}
        alt="profile"
        width="70"
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  ));
};

CastList.propTypes = {
  castItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      character: PropTypes.string,
      cast_id: PropTypes.number,
      profile_path: PropTypes.string,
    })
  ).isRequired,
};
