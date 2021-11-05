/// <reference types="react-scripts" />

declare type Transaction = {
  id: number,
  title: string,
  amount: number,
  type: "deposit" | "withdraw",
  category: string,
  createdAt: Date
};

declare namespace App {
  export type Context = {
    isNewTransactionModalOpen: boolean;
    setIsNewTransactionModalOpen: (isOpen: boolean) => void;
  };
  export interface Provider {
    children: JSX.Element;
  };
}