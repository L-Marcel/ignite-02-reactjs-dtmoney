import { useContextSelector } from "use-context-selector";
import { AppContext } from "../Context/AppProvider";

function useTransactions() {
  const transactions = useContextSelector(AppContext, (c) => c.transactions);
  const reloadTransactions = useContextSelector(AppContext, (c) => c.reloadTransactions);

  return {
    transactions,
    reloadTransactions
  };
};

export { useTransactions };