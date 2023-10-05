import React from "react";
import { CompanyList } from "./companyList.component";
import { fetchMembersRepository } from "./api/companyList.repository";
import { Input } from "@/common";
import { SearchContext } from "@/common/providers/companyList";
import { MyButton } from "@/common/components/button";

export const CompanyListContainer: React.FC = () => {
    const [members, setMembers] = React.useState([]);
    const [company, setCompany] = React.useState("Lemoncode");
    const {search, setSearch} = React.useContext(SearchContext);

    React.useEffect(() => {
        setCompany(search)
        fetchMembersRepository(search).then(setMembers)
    }, [search]);

    const handleOnClick = () => {
        setSearch(company)
    }

    return (
        <>
            <div className="myInput">
            <Input value={company} setValue={setCompany} label="Compañía"/>
            <MyButton setOnClick={handleOnClick}></MyButton>
            </div>
            <CompanyList members={members} />
        </>
        )
}