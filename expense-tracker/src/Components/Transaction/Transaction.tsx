import { useContext } from "react";
import { Globalcontext, TransactionType } from "../../Context/GlobalContext";
import "./Transaction.css";

const Transaction: React.FC<TransactionType> = (transaction) => {
  const context = useContext(Globalcontext);

  if (!context) {
    throw new Error(
      "Globalcontext must be used within a GlobalContextProvider"
    );
  }

  const { deleteTransaction } = context;

  const handleClick = (id: number) => {
    console.log(id, transaction);
    deleteTransaction(id);
  };

  const colorCode: string = transaction.amount < 0 ? "Red" : "Green";

  return (
    <>
      <span className="transaction">
        <span className="column-1">{transaction.text}</span>
        <span className="column-2">${transaction.amount}</span>
        <span className={`column-3  ${colorCode}`}> </span>
        <span className="column-4">
          <button
            className="delete"
            onClick={() => handleClick(transaction.id)}
          >
            X
          </button>
        </span>
      </span>
    </>
  );
};
export default Transaction;
