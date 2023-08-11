import styled from "@emotion/styled";

export const ErrorSpan = styled.span`
  color: red
`;

export const PokemonImg = styled.img<{ $size?:number, $src?: string }>`
  content: url(${props => props.$src ?? "/images/unknownPokemon.png"});
  justify-self: center;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
`;