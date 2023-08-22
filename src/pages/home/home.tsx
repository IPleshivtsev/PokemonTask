import "./home.css";
import React from "react";
import { useState } from "react";
import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";
import { IContextProps } from "../../auxilary/Interfaces";

export const PokemonContext = React.createContext<IContextProps>({
  count: 0,
  setCount: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
});

export const HomePage = () => {
  const [count, setCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <PokemonContext.Provider
      value={{ count, setCount, currentPage, setCurrentPage }}
    >
      <Pagination />
      <List />
      <Pagination />
    </PokemonContext.Provider>
  );
};
