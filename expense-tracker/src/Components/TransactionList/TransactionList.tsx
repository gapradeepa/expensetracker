import { useContext } from "react";
import { Globalcontext, TransactionType } from "../../Context/GlobalContext";
import Transaction from "../Transaction/Transaction";
import "./TransactionList.css";

const TransactionList = () => {
  const context = useContext(Globalcontext);

  if (!context) {
    throw new Error(
      "Globalcontext must be used within a GlobalContextProvider"
    );
  }

  const { transactions } = context;

  return (
    <div className="transactionlist">
      {transactions.map((item) => (
        <Transaction {...item}></Transaction>
      ))}
    </div>
  );
};
export default TransactionList;
