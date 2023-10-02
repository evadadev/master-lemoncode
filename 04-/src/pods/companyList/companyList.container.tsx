import React from "react";
import { CompanyList } from "./companyList.component";
import { fetchMembersRepository } from "./api/companyList.repository";
import { Input } from "@/common";
import { SearchContext, SearchContextProvider } from "@/common/providers/companyList";

export const CompanyListContainer: React.FC = () => {
    const [members, setMembers] = React.useState([]);
    const [company, setCompany] = React.useState("Lemoncode");
    // const [search, setSearch] = React.useState("Lemoncode");
    const {search, setSearch} = React.useContext(SearchContext);

    setSearch("apple")

    React.useEffect(() => {
        fetchMembersRepository(search).then(setMembers)
    }, [search]);

    const handleOnClick = () => {
        setSearch(company)
    }

    return (
        <SearchContextProvider>
            <div className="myInput">
            <Input value={company} setValue={setCompany} />
            <button type="submit" onClick={handleOnClick}>Submit</button>
            </div>
            <CompanyList members={members} />
        </SearchContextProvider>
        )
}