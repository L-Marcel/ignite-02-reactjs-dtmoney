import Modal from "react-modal";
import { useIsNewTransactionModalOpen } from "../../hook/useIsNewTransactionModalOpen";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";
import { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../services/api";
import { useTransactions } from "../../hook/useTransactions";

Modal.setAppElement("#root");

const defaultFormValues: Transaction.Form = {
  amount: 0,
  category: "",
  title: "",
  type: "deposit"
};

function NewTransactionModal() {
  const { reloadTransactions } = useTransactions();
  const { isNewTransactionModalOpen, setIsNewTransactionModalOpen } = useIsNewTransactionModalOpen();
  const [values, setValues] = useState<Transaction.Form>(defaultFormValues);

  function handleCreateNewTransaction(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    api.post("/transactions", values).then(() => {
      reloadTransactions();
      setValues(defaultFormValues);
      setIsNewTransactionModalOpen(false);
    });
  };

  function handleChangeValues(e: ChangeEvent<HTMLInputElement>) {
    if(e.currentTarget.type === "number"){
      const value = Number(e.currentTarget.value);
      setValues({
        ...values,
        [e.currentTarget.name]: value >= 0? value:-1*value
      });
    } else {
      setValues({
        ...values,
        [e.currentTarget.name]: e.currentTarget.value
      });
    };
  };

  function handleChangeType(type: Transaction.Type) {
    setValues({
      ...values,
      type,
    });
  };

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button className="react-modal-close" type="button" onClick={handleCloseNewTransactionModal}>
          <img src={closeImg} alt="Fechar modal"/>
        </button>
        <h2>Cadastrar nova transação</h2>

        <input 
          type="text"
          name="title"
          placeholder="Título"
          value={values.title}
          onChange={handleChangeValues}
        />

        <input 
          type="number"
          name="amount"
          placeholder="Valor"
          value={values.amount !== 0? values.amount:""}
          onChange={handleChangeValues}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => handleChangeType("deposit")}
            isActived={values.type === "deposit"}
            activedColor="green"
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => handleChangeType("withdraw")}
            isActived={values.type === "withdraw"}
            activedColor="red"
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          name="category"
          placeholder="Categoria"
          value={values.category}
          onChange={handleChangeValues}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
};

export { NewTransactionModal };