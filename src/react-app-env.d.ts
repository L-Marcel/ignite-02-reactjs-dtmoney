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

declare namespace App {
  export type Context = {
    isNewTransactionModalOpen: boolean;
    setIsNewTransactionModalOpen: (isOpen: boolean) => void;
  };
  export interface Provider {
    children: JSX.Element;
  };
};