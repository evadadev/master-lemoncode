import Axios from 'axios';
import { CharacterCollectionApi } from './character-collection.api-model';

const url = `/api/characters`;

export const getCharacterCollection = async (start, end): Promise<CharacterCollectionApi[]> => {
  try {

    const { data } = await Axios.get(`${url}?_start=${start}&_end=${end}`)
    return data;
  } catch (error) {
    console.log(error)
  }
};

export const deleteCharacterCollection = async (id: string): Promise<boolean> => {
  try {
    await Axios.delete(`${url}/${id}`)
    return true
  } catch (error) {
    console.log(error)
  }
};

