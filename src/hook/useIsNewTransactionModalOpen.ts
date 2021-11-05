import { useContextSelector } from "use-context-selector";
import { AppContext } from "../Context/AppProvider";

function useIsNewTransactionModalOpen() {
  const isNewTransactionModalOpen = useContextSelector(AppContext, (c) => c.isNewTransactionModalOpen);
  const setIsNewTransactionModalOpen = useContextSelector(AppContext, (c) => c.setIsNewTransactionModalOpen);

  return {
    isNewTransactionModalOpen,
    setIsNewTransactionModalOpen
  };
};

export { useIsNewTransactionModalOpen };