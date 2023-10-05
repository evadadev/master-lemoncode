export interface Search {
    search: string;
  }
  
  export const createEmptySearch = (): Search => ({
    search: "",
  });
  