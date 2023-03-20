import PropTypes from 'prop-types';
import { IMAGE_URL } from '../../components/FetchData';
import noImage from '../../images/noImage.jpg';

import {
  CastItem,
  CastImg,
  ActorName,
  CharacterName,
} from '../CastList/CastList.styled';

export const CastList = ({ castItems }) => {
  return castItems.map(({ name, character, cast_id, profile_path }) => (
    <CastItem key={cast_id}>
      <CastImg
        src={profile_path ? `${IMAGE_URL}${profile_path}` : `${noImage}`}
        alt="profile"
      />
      <ActorName>{name}</ActorName>
      <CharacterName>Character: {character}</CharacterName>
    </CastItem>
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
