import styled from "@emotion/styled";

export const CollapseBlockDiv = styled.div`
  margin-top: 15px;
`;

export const TitleBlockDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ArrowMoreImg = styled.img<{ $isCollapsed?: boolean; }>`
  content: url("/images/arrowMore.svg");
  margin-right: 10px;
  width: 20px;
  transform: ${props => props.$isCollapsed ? 'rotate(180deg)' : ''};
`;

export const TitleDiv = styled.div`
  font-weight: bold;
`;

export const ElementsBlockDiv = styled.div<{ $isCollapsed?: boolean; }>`
  margin-left: 30px;
  margin-top: 5px;
  display: ${props => props.$isCollapsed ? 'block' : 'none'};
`;
