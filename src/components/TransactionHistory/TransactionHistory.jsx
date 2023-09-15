import cssTransactionHistory from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={cssTransactionHistory.transactionHistory}>
      <thead>
        <tr className={cssTransactionHistory.theadTr}>
          <th className={cssTransactionHistory.th}>Type</th>
          <th className={cssTransactionHistory.th}>Amount</th>
          <th className={cssTransactionHistory.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={cssTransactionHistory.tbodyTr}>
            <td className={cssTransactionHistory.td}>{type}</td>
            <td className={cssTransactionHistory.td}>{amount}</td>
            <td className={cssTransactionHistory.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
