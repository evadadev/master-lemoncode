import { Apimodel } from "./rickList.apiModel"

export const getApiRick = (): Promise<Apimodel> => 
    fetch(`https://rickandmortyapi.com/api/character`)
    .then((r) => r.json())