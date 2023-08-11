import axios, { AxiosResponse } from "axios";
import {
  IPokemonData,
  IPokemonDataResponse,
  IPokemonCardData,
  IPokemonCardDataResponse,
} from "../auxilary/Interfaces";

const pokemonBaseURL = "https://pokeapi.co/api/v2/pokemon";

export async function GetPokemonNames(
  currentPage: number = 1
): Promise<IPokemonData | null> {
  return await axios
    .get<IPokemonDataResponse>(
      `${pokemonBaseURL}?limit=20&offset=${(currentPage - 1) * 20}`
    )
    .then(
      ({ data, status, statusText }: AxiosResponse<IPokemonDataResponse>) => {
        if (status !== 200) {
          return Promise.reject(`${status}: ${statusText}`);
        }
        return Promise.resolve({
          count: data.count,
          pokemonNames: data.results.map(({ name }) => {
            return name;
          }),
        });
      }
    )
    .catch(function (error) {
      console.log(error);
      return Promise.reject(`${error.code}: ${error.message}`);
    });
}

export async function GetPokemonCardData(
  pokemonName: string
): Promise<IPokemonCardData | null> {
  return await axios
    .get<IPokemonCardDataResponse>(`${pokemonBaseURL}/${pokemonName}`)
    .then(
      ({
        data,
        status,
        statusText,
      }: AxiosResponse<IPokemonCardDataResponse>) => {
        if (status !== 200) {
          return Promise.reject(`${status}: ${statusText}`);
        }

        const result: IPokemonCardData = {
          name: data.name,
          height: data.height,
          weight: data.weight,
          stats: data.stats.map(({ stat, base_stat }) => {
            return { stat: stat.name, base_stat };
          }),
          abilities: data.abilities.map(({ ability }) => {
            return ability.name;
          }),
          forms: data.forms.map(({ name }) => {
            return name;
          }),
          moves: data.moves.map(({ move }) => {
            return move.name;
          }),
          spriteUrl: data.sprites.front_default,
        };
        return Promise.resolve(result);
      }
    )
    .catch(function (error) {
      console.log(error);
      return Promise.reject(`${error.code}: ${error.message}`);
    });
}
