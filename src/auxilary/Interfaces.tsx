//#region Models
export interface INameData {
  name: string;
}

export interface IStatData {
  stat: string;
  base_stat: number;
}

export interface IPokemonCardData {
  name: string;
  height: number;
  weight: number;
  stats: Array<IStatData>;
  abilities: Array<string>;
  forms: Array<string>;
  moves: Array<string>;
  spriteUrl: string;
}

export interface IPokemonData {
  count: number;
  pokemonNames: Array<string>;
}
//#endregion

//#region ResponseModels
export interface ISpriteDataResponse {
  front_default: string;
}

export interface IStatDataResponse {
  stat: INameData;
  base_stat: number;
}

export interface IMoveDataResponse {
  move: INameData;
}

export interface IAbilityDataResponse {
  ability: INameData;
}

export interface IPokemonCardDataResponse {
  name: string;
  height: number;
  weight: number;
  stats: Array<IStatDataResponse>;
  abilities: Array<IAbilityDataResponse>;
  forms: Array<INameData>;
  moves: Array<IMoveDataResponse>;
  sprites: ISpriteDataResponse;
}

export interface IPokemonDataResponse {
  count: number;
  next: string;
  previous: string;
  results: Array<INameData>;
}
//#endregion

//#region PropsModels
export interface IContextProps {
  count: number;
  setCount: (a: number) => void;
  currentPage: number;
  setCurrentPage: (a: number) => void;
}

export interface ICardProps {
  pokemonName: string;
}

export interface IDetailsDialogProps {
  pokemonData: IPokemonCardData;
  setIsDialogOpen: (a: boolean) => void;
}

export interface ICollapseBlockProps {
  children: JSX.Element|JSX.Element[];
  title: string;
}
//#endregion
