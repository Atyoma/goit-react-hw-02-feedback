import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';
import s from './friends.module.css';
// import App from 'App';
// import StatisticCard from './statisticCard';
export default function FriendList({ friends }) {
  return (
    <ul className={s.friend__list}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
