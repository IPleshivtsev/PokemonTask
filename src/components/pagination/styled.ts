import styled from "@emotion/styled";

export const PaginationBlockDiv = styled.div`
  margin: auto;
  margin-top: 20px;
  display: table;
`;

export const PaginationCountBlockDiv = styled.div`
  display: inline-block;
  margin-right: 20px;
`;

export const PaginationButtonsBlockDiv = styled.div`
  display: inline-block;
`;

const PaginationButton = styled.button`
  color: black;
  background: #e5f9f2;
  border: 1px solid #00c689;
  cursor: pointer;
  width: 30px;
  height: 30px;
  user-select: none;
`;

export const MovePageButton = styled(PaginationButton)<{ $isDisabled?: boolean }>`
  margin: 0px 5px;

  &:hover {
    background: #5ce5b5;
  }

  ${props => props.$isDisabled 
    ? `
    &:disabled {
      background-color: #e2e1e1;
      border: 1px solid #828584;
      cursor: default;
    }` 
    : ''
   }
`;

export const NumberPageButton = styled(PaginationButton)<{ $isActive?: boolean }>`
  margin: 0px 2px;

  ${props => props.$isActive ? '&,' : ''} &:hover {
    background: #5ce5b5;
  }
`;