import { IListProps } from "../../auxilary/Interfaces";
import { useEffect } from "react";
import useSWR from "swr";
import { GetPokemonNames } from "../../api/Api";
import { Loading } from "../loading";
import { Card } from "../card";
import { PokemonCardListDiv } from "./styled";
import { ErrorSpan } from "../../auxilary/commonStyled";

export function List({ setCount, currentPage }: IListProps) {
  const { data, mutate, error, isLoading } = useSWR("GetPokemonNames", () =>
    GetPokemonNames(currentPage)
  );

  useEffect(() => {
    setCount(data ? data.count : 0);
  }, [data]);

  useEffect(() => {
    async function updatePokemonData() {
      return await mutate(GetPokemonNames(currentPage), {
        rollbackOnError: true,
        populateCache: true,
        revalidate: false,
      });
    }
    updatePokemonData();
  }, [currentPage]);

  return (
    <PokemonCardListDiv>
      {error ? <ErrorSpan>{error}</ErrorSpan> : null}
      {isLoading && <Loading />}
      {data
        ? data.pokemonNames.map((pokemonName) => {
            return <Card key={pokemonName} pokemonName={pokemonName} />;
          })
        : null}
    </PokemonCardListDiv>
  );
}
