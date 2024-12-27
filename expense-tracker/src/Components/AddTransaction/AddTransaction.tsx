import { useContext, useState } from "react";
import "./AddTransaction.css";
import { Globalcontext, TransactionType } from "../../Context/GlobalContext";

const AddTransaction = () => {
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState("");
  const context = useContext(Globalcontext);

  if (!context) {
    throw new Error(
      "Globalcontext must be used within a GlobalContextProvider"
    );
  }
  const { addTransaction } = context;

  const handleClick = () => {
    if (amount == 0 || text === "") {
      alert("Please enter details");
    } else {
      const trans: TransactionType = {
        id: Number(Date.now().toString()),
        text: text,
        amount: amount,
      };
      addTransaction(trans);
    }
  };

  return (
    <>
      <div className="marginleft">
        <h4>Add NewTransaction</h4>
        <div className="line"></div>
      </div>
      <div className="addtransaction marginleft">
        <div>Enter Transaction Name</div>
        <input
          type="text"
          placeholder="Enter transaction text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <div>Enter amount (negative-expense, positive-income)</div>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        ></input>
      </div>
      <div className="marginleft ">
        <button className="button" onClick={handleClick}>
          Add Transaction
        </button>
      </div>
    </>
  );
};
export default AddTransaction;
