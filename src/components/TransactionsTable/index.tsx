import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get<Transaction[]>("transactions")
    .then(res => setTransactions(res.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map((transaction, i) => {
              return (
                <tr key={`${i}-transaction`}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {transaction.type === "withdraw" && "- "}R$ {transaction.amount.toFixed(2)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </Container>
  );
};

export { TransactionsTable };