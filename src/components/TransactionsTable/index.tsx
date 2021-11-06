import { useTransactions } from "../../hook/useTransactions";
import { Container } from "./styles";

function TransactionsTable() {
  const { transactions } = useTransactions();

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
                    {transaction.type === "withdraw" && "- "}
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL"
                    }).format(transaction.amount)}
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