import TransactionList from "../TransactionList/TransactionList";
import "./History.css";

type Props = {};
const History = (props: Props) => {
  return (
    <div className="marginleft">
      <h4 className="history">History</h4>
      <div className="line"></div>
      <TransactionList></TransactionList>
    </div>
  );
};
export default History;
