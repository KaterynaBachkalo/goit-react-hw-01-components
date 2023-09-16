import cssStatistics from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={cssStatistics.statistics}>
      {title && <h2 className={cssStatistics.title}>{title}</h2>}

      <ul className={cssStatistics.statList}>
        {stats.map(({ label, percentage, id }) => {
          return (
            <li
              className={cssStatistics.item}
              key={id}
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
              <span className={cssStatistics.label}>{label}</span>
              <span className={cssStatistics.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
