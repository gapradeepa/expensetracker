import { useContext } from "react";
import "./IncomeExpense.css";
import { Globalcontext } from "../../Context/GlobalContext";

const IncomeExpense = () => {
  const context = useContext(Globalcontext);

  if (!context) {
    throw new Error(
      "Globalcontext must be used within a GlobalContextProvider"
    );
  }

  const { transactions } = context;

  const getAmount = (type: string) => {
    let amount = 0;

    if (type == "income") {
      transactions.forEach((item) => {
        amount += item.amount > 0 ? item.amount : 0;
      });
    } else {
      transactions.forEach((item) => {
        amount += item.amount < 0 ? item.amount : 0;
      });
    }
    return amount;
  };

  return (
    <>
      <div className="incomeexpense">
        <div className="section">
          <div>Income</div>
          <div className="income">${getAmount("income")}</div>
        </div>
        <div className="section">
          <div>Expense</div>
          <div className="expense">${getAmount("expense")}</div>
        </div>
      </div>
    </>
  );
};
export default IncomeExpense;
