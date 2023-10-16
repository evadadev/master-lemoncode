import React from "react";

interface Context {
    petsCart: Number[],
    setPetsCart: (petsCart: Number[]) => void;
}

export const PetsContext = React.createContext<Context>(null);

interface Props {
    children: React.ReactNode;
}

export const PetsProvider: React.FC<Props> = (props) => {
    const { children } = props;
    const [petsCart, setPetsCart] = React.useState([]);
    return (
        <PetsContext.Provider
        value={{
            petsCart,
            setPetsCart,
        }}
        >
            {children}
        </PetsContext.Provider>
    )
}