import { useCallback, useState } from "react";
import { createContext } from "use-context-selector";

export const AppContext = createContext({} as App.Context);

function AppProvider({ children }: App.Provider) {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const _setIsNewTransactionModalOpen = useCallback((isOpen) => {
    setIsNewTransactionModalOpen(isOpen);
  },[]);

  return (
    <AppContext.Provider
      value={{
        isNewTransactionModalOpen,
        setIsNewTransactionModalOpen: _setIsNewTransactionModalOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };