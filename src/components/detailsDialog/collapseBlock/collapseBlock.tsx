import { ICollapseBlockProps } from "../../../auxilary/Interfaces";
import { useState } from "react";
import {
  ArrowMoreImg,
  CollapseBlockDiv,
  ElementsBlockDiv,
  TitleBlockDiv,
  TitleDiv,
} from "./styled";

export function CollapseBlock({ title, elements }: ICollapseBlockProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <CollapseBlockDiv onClick={() => setIsCollapsed(!isCollapsed)}>
      <TitleBlockDiv>
        <ArrowMoreImg $isCollapsed={isCollapsed} />
        <TitleDiv>{title}</TitleDiv>
      </TitleBlockDiv>
      <ElementsBlockDiv $isCollapsed={isCollapsed}>{elements}</ElementsBlockDiv>
    </CollapseBlockDiv>
  );
}
