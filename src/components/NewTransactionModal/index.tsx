import Modal from "react-modal";
import { useIsNewTransactionModalOpen } from "../../hook/useIsNewTransactionModalOpen";

Modal.setAppElement("#root");

function NewTransactionModal() {
  const { isNewTransactionModalOpen, setIsNewTransactionModalOpen } = useIsNewTransactionModalOpen();

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
    >
      <h2>Cadastrar nova transação</h2>
    </Modal>
  );
};

export { NewTransactionModal };