import React from "react";
import { RickList } from "./rickList.component";
import { memberRepositoryRick } from "./api/rickList.repository";

export const RickListContainer: React.FC = () => {
    const [members, setMembers] = React.useState([]);

    React.useEffect(() => {
        memberRepositoryRick()
        .then(setMembers)
}, [])

    return (
        <>
        <RickList members={members}/>
        </>
    )
}