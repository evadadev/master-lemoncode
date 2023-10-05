import React  from "react";

interface SearchContext {
    search: string;
    setSearch: (value: string) => void;
}

export const SearchContext = React.createContext<SearchContext> ({
    search: "",
    setSearch: () => {}
})

interface Props {
    children: React.ReactNode;
}

export const SearchContextProvider: React.FC<Props> = (props) => {
    const { children } = props;
    const [ search, setSearch ] = React.useState("Lemoncode");

    return (
        <SearchContext.Provider 
        value={{
            search, 
            setSearch,
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}