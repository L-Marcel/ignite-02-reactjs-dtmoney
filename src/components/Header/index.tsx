import { Button, Container, Content } from "./styles";
import logoImg from "../../assets/logo.svg";
import { useIsNewTransactionModalOpen } from "../../hook/useIsNewTransactionModalOpen";

function Header() {
  const { setIsNewTransactionModalOpen } = useIsNewTransactionModalOpen();

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  };

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"/>
        <Button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </Button>
      </Content>
    </Container>
  );
};

export { Header };