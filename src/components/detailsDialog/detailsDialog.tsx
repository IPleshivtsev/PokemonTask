import { IDetailsDialogProps } from "../../auxilary/Interfaces";
import { useEffect, useRef } from "react";
import { setCapitalLetterForString } from "../../auxilary/generalFunctions";
import { CollapseBlock } from "./collapseBlock";
import {
  ModalBodyDiv,
  ModalCloseButton,
  ModalCloseSpan,
  ModalContentDiv,
  ModalDialogDiv,
  ModalFooterDiv,
  ModalHeaderDiv,
  ModalTitleH3,
  PokemonDetailsBlockDiv,
  PokemonDetailsModalDiv,
  PokemonSpriteBlock
} from "./styled";
import { PokemonImg } from "../../auxilary/commonStyled";

export function DetailsDialog({
  pokemonData,
  setIsDialogOpen,
}: IDetailsDialogProps) {
  const modalDialogRef = useRef<HTMLDivElement>(null);
  const { name, height, weight, stats, abilities, forms, moves, spriteUrl } =
    pokemonData;

  const onClose = () => setIsDialogOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        modalDialogRef.current &&
        !modalDialogRef.current.contains(event.target)
      ) {
        onClose && onClose();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClose]);

  return (
    <PokemonDetailsModalDiv onClick={onClose}>
      <ModalDialogDiv ref={modalDialogRef} onClick={(e) => e.stopPropagation()}>
        <ModalHeaderDiv>
          <ModalTitleH3>Pokemon details</ModalTitleH3>
          <ModalCloseSpan onClick={onClose}>&times;</ModalCloseSpan>
        </ModalHeaderDiv>
        <ModalBodyDiv>
          <ModalContentDiv>
            <PokemonSpriteBlock>
              <PokemonImg $size={150} $src={spriteUrl} />
            </PokemonSpriteBlock>
            <PokemonDetailsBlockDiv>
              <span>
                <strong>Name:</strong> {setCapitalLetterForString(name)}
              </span>
              <span>
                <strong>Height:</strong> {height} dm
              </span>
              <span>
                <strong>Weight:</strong> {weight} hg
              </span>
              <CollapseBlock
                title={"Stats"}
                elements={stats.map(({ stat, base_stat }) => {
                  return (
                    <span key={stat}>
                      <strong>{setCapitalLetterForString(stat)}</strong>:{" "}
                      {base_stat}
                    </span>
                  );
                })}
              />
              <CollapseBlock
                title={"Forms"}
                elements={forms.map((name) => {
                  return (
                    <span key={name}>{setCapitalLetterForString(name)}</span>
                  );
                })}
              />
              <CollapseBlock
                title={"Moves"}
                elements={moves.map((name) => {
                  return (
                    <span key={name}>{setCapitalLetterForString(name)}</span>
                  );
                })}
              />
              <CollapseBlock
                title={"Abilities"}
                elements={abilities.map((name) => {
                  return (
                    <span key={name}>{setCapitalLetterForString(name)}</span>
                  );
                })}
              />
            </PokemonDetailsBlockDiv>
          </ModalContentDiv>
        </ModalBodyDiv>
        <ModalFooterDiv>
          <ModalCloseButton onClick={onClose}>Закрыть</ModalCloseButton>
        </ModalFooterDiv>
      </ModalDialogDiv>
    </PokemonDetailsModalDiv>
  );
}
