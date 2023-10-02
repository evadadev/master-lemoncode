import React from "react";
import { RickDetail } from "./rickDetail.component";
import { createMemberDefault } from "./rickDetail.vm";
import { useParams } from "react-router-dom";
import { getMemberRepository } from "./api/rickDetail.repository";

export const RickDetailContainer: React.FC = () => {
    const [ member, setMember ] = React.useState(createMemberDefault);
    const { id } = useParams();

    React.useEffect(() => {
        getMemberRepository(id)
        .then(setMember)
    }, [id])

    return (
        <RickDetail member={member}/>
    )
}