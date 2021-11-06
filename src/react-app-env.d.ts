/// <reference types="react-scripts" />

declare namespace Transaction {
  export type Type = "deposit" | "withdraw";

  export interface Form {
    title: string,
    amount: number,
    type: Type,
    category: string,
  }

  export interface Interface extends Form {
    id: number,
    createdAt: Date
  }

  export interface Response {
    transactions: Interface[]
  }
}

declare interface RadioBoxProps {
  isActived: boolean;
  activedColor: "green" | "red";
}

declare type Sumary = {
  deposit: number;
  withdraw: number;
  total: number;
};

declare namespace App {
  export type Context = {
    transactions: Transaction.Interface[],
    reloadTransactions: () => void;
    isNewTransactionModalOpen: boolean;
    setIsNewTransactionModalOpen: (isOpen: boolean) => void;
  };
  export interface Provider {
    children: JSX.Element;
  };
};