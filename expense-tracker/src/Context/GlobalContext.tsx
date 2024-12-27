import { createContext, useReducer, ReactNode, useEffect, useRef } from "react";

export type TransactionType = { id: number; text: string; amount: number };

interface Globalcontext {
  transactions: TransactionType[];
  addTransaction: (trans: TransactionType) => void;
  deleteTransaction: (id: number) => void;
}

const Globalcontext = createContext<Globalcontext | undefined>(undefined);

interface Props {
  children: ReactNode;
}

enum actionEnum {
  ADD = "ADD",
  DELETE = "DELETE",
}

interface globalAction {
  type: actionEnum;
  payload: any;
}

interface TransactionsType {
  transaction: TransactionType[];
}

const GlobalContextProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const globalReducer = (state: TransactionsType, action: globalAction) => {
    switch (action.type) {
      case actionEnum.ADD:
        return { transaction: [...state.transaction, action.payload] };
      case actionEnum.DELETE:
        return {
          transaction: state.transaction.filter(
            (item) => item.id !== action.payload
          ),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(globalReducer, {
    transaction: [],
  });

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      const storedTransactions = JSON.parse(
        localStorage.getItem("expensetracker") || "[]"
      );
      console.log(storedTransactions);

      storedTransactions.forEach((element: TransactionType) => {
        addTransaction(element);
      });

      firstRender.current = false; // Mark that the first render has passed
    }
  });

  useEffect(() => {
    localStorage.setItem("expensetracker", JSON.stringify(state.transaction));
  }, [state.transaction]);

  const addTransaction = (trans: TransactionType) => {
    dispatch({ type: actionEnum.ADD, payload: trans });
  };

  const deleteTransaction = (id: number) => {
    dispatch({ type: actionEnum.DELETE, payload: id });
  };

  return (
    <Globalcontext.Provider
      value={{
        transactions: state.transaction,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Globalcontext.Provider>
  );
};

export { GlobalContextProvider, Globalcontext };
