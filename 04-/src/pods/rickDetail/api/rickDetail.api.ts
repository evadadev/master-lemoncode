import { Apimodel } from "./rickDetail.api-model";

export const getMemberApi = (id: number): Promise<Apimodel> => 
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json());