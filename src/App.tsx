import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle/>
      <NewTransactionModal/>
      <Header/>
      <Dashboard/>
    </>
  );
};

export { App };
