import React from "react";
import { PetsProvider } from "./core/petsCart";
import { RouterComponent } from "./router";

export const App = () => {
  return (
    <PetsProvider>
      <RouterComponent />
    </PetsProvider>
  ) 
  
};
