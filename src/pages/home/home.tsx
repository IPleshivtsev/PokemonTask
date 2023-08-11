import "./home.css";
import { useState } from "react";
import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";

export const HomePage = () => {
  const [count, setCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <div>
      <Pagination
        count={count}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <List setCount={setCount} currentPage={currentPage} />
      <Pagination
        count={count}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
