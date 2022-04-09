import s from './statistic.module.css';
const StatisticCard = ({ label, percentage }) => {
  return (
    <>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </>
  );
};

export default StatisticCard;
