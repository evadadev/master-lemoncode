import React from "react";
import { RouterComponent } from "@/router";
import { SearchContextProvider } from "./common/providers/companyList";

export const App = () => {
    return (
        <SearchContextProvider>
            <RouterComponent />
        </SearchContextProvider>
    ) 
};
