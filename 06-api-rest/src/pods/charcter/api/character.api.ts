import { Character } from './character.api-model';
import Axios from 'axios';

const url = '/api/characters'

export const getCharacter = async (id: string): Promise<Character> => {
  try {
    const { data } = await Axios.get(`${url}/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  try {
    if(character.id) {
      await Axios.put(`${url}/${character.id}`, character)
    } else {
      await Axios.post(url, {
        ...character,
        image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'
      })
    }
    return true;
  }  catch (error) {
    console.log(error)
  }
};
