export interface Character {
  id: string;
  image: string;
  name: string;
  species: string;
  status: string,
  gender: string,
  bestSenteces: string
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  image: '',
  species: '',
  status: '',
  gender: '',
  bestSenteces: ''
});
