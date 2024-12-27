import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Balance from "./Components/Balance/Balance";
import IncomeExpense from "./Components/IncomeExpense/IncomeExpense";
import History from "./Components/History/History";
import AddTransaction from "./Components/AddTransaction/AddTransaction";
import { GlobalContextProvider } from "./Context/GlobalContext";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <GlobalContextProvider>
        <Balance></Balance>
        <IncomeExpense></IncomeExpense>
        <History></History>
        <AddTransaction></AddTransaction>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
