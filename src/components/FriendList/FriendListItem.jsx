import cssFriendList from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={cssFriendList.item}>
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
    </li>
  );
};
