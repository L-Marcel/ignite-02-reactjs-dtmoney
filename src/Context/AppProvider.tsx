import { useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../services/api";

export const AppContext = createContext({} as App.Context);

function AppProvider({ children }: App.Provider) {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [transactions, setTransactions] = useState<Transaction.Interface[]>([]);

  const _setIsNewTransactionModalOpen = useCallback((isOpen: boolean) => {
    setIsNewTransactionModalOpen(isOpen);
  },[]);

  const _reloadTransactions = useCallback(() => {
    api.get<Transaction.Response>("transactions")
    .then(res => setTransactions(res.data.transactions));
  }, [setTransactions]);

  useEffect(() => {
    _reloadTransactions();
  }, [_reloadTransactions]);

  return (
    <AppContext.Provider
      value={{
        transactions,
        reloadTransactions: _reloadTransactions,
        isNewTransactionModalOpen,
        setIsNewTransactionModalOpen: _setIsNewTransactionModalOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };