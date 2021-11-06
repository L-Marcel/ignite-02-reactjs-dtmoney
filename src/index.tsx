import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';
import { AppProvider } from './Context/AppProvider';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance",
          amount: 1000,
          type: "deposit",
          category: "dev",
          createdAt: new Date()
        },
        {
          id: 2,
          title: "Aluguel",
          amount: 500,
          type: "withdraw",
          category: "casa",
          createdAt: new Date()
        },
      ]
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      let values = { ...data, createdAt: new Date() };

      return schema.create("transaction", values);
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App/>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);