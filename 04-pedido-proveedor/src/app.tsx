import React from "react";
import { ValidaProvider } from "./common/provider";
import { RouterComponent } from "./core/router";

export const App = () => {

  return (
    <ValidaProvider>
      <RouterComponent />
    </ValidaProvider>
  )
};
