import PropTypes from 'prop-types';
import s from './profile.module.css';
export default function Profile({ img, name, tag, location, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={img} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}> {tag} </p>
        <p className={s.location}> {location} </p>
      </div>
      <ul className={s.stats}>
        <li className={s.stats__item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}> {stats.followers} </span>
        </li>
        <li className={s.stats__item}>
          <span className={s.label__follow}>Views</span>
          <span className={s.quantity}> {stats.views} </span>
        </li>
        <li className={s.stats__item}>
          <span className={s.label__like}>Likes</span>
          <span className={s.quantity}> {stats.likes} </span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
