import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hook/useTransactions";
import { useEffect, useState } from "react";

function Summary() {
  const { transactions } = useTransactions();
  const [sumary, setSumary] = useState<Sumary>({
    deposit: 0,
    withdraw: 0,
    total: 0
  });

  useEffect(() => {
    const _sumary = transactions.reduce((acc, transaction) => {
      if(transaction.type === "deposit") {
        acc.deposit += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      };

      return acc;
    }, {
      deposit: 0,
      withdraw: 0,
      total: 0
    } as Sumary);

    setSumary(_sumary);
  }, [transactions]);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>
          {
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL"
            }).format(sumary.deposit)
          }
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong>
          - {
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL"
            }).format(sumary.withdraw)
          }
        </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>
          {
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL"
            }).format(sumary.total)
          }
        </strong>
      </div>
    </Container>
  );
};

export { Summary };