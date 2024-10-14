import { useContext } from "react";
import {
  MovePageButton,
  NumberPageButton,
  PaginationBlockDiv,
  PaginationButtonsBlockDiv,
  PaginationCountBlockDiv,
} from "./styled";
import { PokemonContext } from "../../pages/home/home";

export function Pagination() {
  const { count, currentPage, setCurrentPage } = useContext(PokemonContext);
  const maxPageNumber = Math.ceil(count / 20);

  function CreatePaginationNumberButtons() {
    const paginationNumberButtons: Array<() => JSX.Element> = [];

    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      if (i > 0 && i <= maxPageNumber) {
        paginationNumberButtons.push(() => {
          return (
            <NumberPageButton
              key={i}
              $isActive={i === currentPage}
              value={i}
              onClick={(e) => {
                setCurrentPage(
                  parseInt(e.currentTarget.getAttribute("value") as string)
                );
              }}
            >
              {i}
            </NumberPageButton>
          );
        });
      }
    }
    
    return paginationNumberButtons.map((paginationNumberButtonFunc) => {
      return paginationNumberButtonFunc();
    });
  }

  return (
    <PaginationBlockDiv>
      <PaginationCountBlockDiv>Count: {count}</PaginationCountBlockDiv>
      <PaginationButtonsBlockDiv>
        <MovePageButton
          $isDisabled={currentPage === 1}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
        >
          {"<<"}
        </MovePageButton>
        <MovePageButton
          $isDisabled={currentPage === 1}
          disabled={currentPage === 1}
          onClick={() => {
            if (currentPage - 1 > 0) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          {"<"}
        </MovePageButton>
        {CreatePaginationNumberButtons()}
        <MovePageButton
          $isDisabled={currentPage === maxPageNumber}
          disabled={currentPage === maxPageNumber}
          onClick={() => {
            if (currentPage + 1 <= maxPageNumber)
              setCurrentPage(currentPage + 1);
          }}
        >
          {">"}
        </MovePageButton>
        <MovePageButton
          $isDisabled={currentPage === maxPageNumber}
          disabled={currentPage === maxPageNumber}
          onClick={() => setCurrentPage(maxPageNumber)}
        >
          {">>"}
        </MovePageButton>
      </PaginationButtonsBlockDiv>
    </PaginationBlockDiv>
  );
}
