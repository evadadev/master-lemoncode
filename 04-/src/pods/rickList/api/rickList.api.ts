import { Apimodel } from "./rickList.apiModel"

export const getApiRick = (search): Promise<Apimodel> => 
    fetch(`https://rickandmortyapi.com/api/character${search}`)
    .then((r) => r.json())