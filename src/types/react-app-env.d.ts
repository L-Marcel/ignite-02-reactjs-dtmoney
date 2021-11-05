/// <reference types="react-scripts" />

declare type Transaction = {
  id: number,
  title: string,
  amount: number,
  type: "deposit" | "withdraw",
  category: string,
  createdAt: Date
};