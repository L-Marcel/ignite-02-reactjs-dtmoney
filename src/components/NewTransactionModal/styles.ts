import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 2.5rem;
    height: 4rem;
    border: none;
    border-radius: 0.25rem;

    background: #e7e9ee;
    border-color: #d7d7d7;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;

    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter .5s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
      cursor: pointer;
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

const colors = {
  green: "#33CC95",
  red: "#E52E4D"
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: ${props => props.isActived? "0":"1px"} solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${props => props.isActived? 
    (transparentize(0.9, colors[props.activedColor]) || "#eee")
    :"transparent"
  };
  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color .5s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    height: 25px;
    width: 25px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;