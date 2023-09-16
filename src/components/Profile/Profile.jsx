import cssProfile from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={cssProfile.profile}>
      <div className={cssProfile.description}>
        <img src={avatar} alt={username} className={cssProfile.avatar} />
        <p className={cssProfile.name}>{username}</p>
        <p className={cssProfile.tag}>@{tag}</p>
        <p className={cssProfile.location}>{location}</p>
      </div>

      <ul className={cssProfile.stats}>
        <li className={cssProfile.item}>
          <span className={cssProfile.label}>Followers</span>
          <span className={cssProfile.quantity}>{followers}</span>
        </li>
        <li className={cssProfile.item}>
          <span className={cssProfile.label}>Views</span>
          <span className={cssProfile.quantity}>{views}</span>
        </li>
        <li className={cssProfile.item}>
          <span className={cssProfile.label}>Likes</span>
          <span className={cssProfile.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
