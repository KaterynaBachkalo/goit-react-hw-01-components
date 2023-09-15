import cssFriendList from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span
        className={
          isOnline ? cssFriendList.statusOnline : cssFriendList.statusOffline
        }
      ></span>
      <img
        className={cssFriendList.avatar}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={cssFriendList.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
