import PropTypes from 'prop-types';
import StatisticCard from './statisticCard';
import s from './statistic.module.css';
// import App from 'App';
// import StatisticCard from './statisticCard';
export default function Statistics({ stats, title }) {
  return (
    <section className={s.statistics}>
      {title && (
        <h2 style={{ marginLeft: 'auto', marginRight: 'auto' }}>{title}</h2>
      )}
      <ul className={s.stat__list}>
        {stats.map(stat => (
          <li
            className={s.item}
            style={{ backgroundColor: generateColor() }}
            key={stat.id}
          >
            <StatisticCard label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
