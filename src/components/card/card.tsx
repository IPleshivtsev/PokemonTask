import { ICardProps } from "../../auxilary/Interfaces";
import { useState } from "react";
import useSWR from "swr";
import { GetPokemonCardData } from "../../api/Api";
import { DetailsDialog } from "../detailsDialog";
import { setCapitalLetterForString } from "../../auxilary/generalFunctions";
import { PokemonCardDiv } from "./styled";
import { ErrorSpan, PokemonImg } from "../../auxilary/commonStyled";

export function Card({ pokemonName }: ICardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { data, error } = useSWR(`GetPokemonCardData_${pokemonName}`, () =>
    GetPokemonCardData(pokemonName)
  );

  return (
    <PokemonCardDiv onClick={() => setIsDialogOpen(true)}>
      {error ? <ErrorSpan>{error}</ErrorSpan> : null}
      <div>{setCapitalLetterForString(pokemonName)}</div>

      {!data && <PokemonImg $size={96} $src={"/images/imageLoader.svg"} />}
      {data && <PokemonImg $size={96} $src={data.spriteUrl ?? "/images/unknownPokemon.png"} />}

      <span className="flare" />
      {isDialogOpen && data && (
        <DetailsDialog pokemonData={data} setIsDialogOpen={setIsDialogOpen} />
      )}
    </PokemonCardDiv>
  );
}
