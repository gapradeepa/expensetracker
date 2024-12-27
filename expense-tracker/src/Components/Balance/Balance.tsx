import { useContext } from "react";
import "./Balance.css";
import { Globalcontext, TransactionType } from "../../Context/GlobalContext";

const Balance = () => {
  const context = useContext(Globalcontext);

  if (!context) {
    throw new Error(
      "Globalcontext must be used within a GlobalContextProvider"
    );
  }

  const { transactions } = context;

  const balanceAmount = () => {
    let sum: number = 0;
    transactions.forEach((item) => {
      sum += item.amount;
    });
    return sum;
  };

  return (
    <>
      <h4 className="balance">Your Balance</h4>
      <div className="balanceamount">${balanceAmount()}</div>
    </>
  );
};
export default Balance;
