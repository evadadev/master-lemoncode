import React from "react";
import { RickList } from "./rickList.component";
import { memberRepositoryRick } from "./api/rickList.repository";
import { RickSearch } from "./component/rickSearch.component";

export const RickListContainer: React.FC = () => {
    const [members, setMembers] = React.useState([]);
    const [search, setSearch ] = React.useState("");

    React.useEffect(() => {
        memberRepositoryRick(search).then(setMembers).catch( error => setMembers([]))
    }, [search])

    return (
        <>
        <RickSearch onChange={setSearch}/>
        <RickList members={members}/>
        </>
    )
}