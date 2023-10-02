import React from "react";
import { useParams } from "react-router-dom";
import { CompanyDetail } from "./companyDetail.component";
import { createMemberDefault } from "./companyDetail.vm";
import { getMemberRepository } from "./api/companyDetail.repository";

export const CompanyDetailContainer: React.FC = () => {
    const [member, setMember] = React.useState(createMemberDefault);
    const {id} = useParams(); 

    React.useEffect (() => {
        getMemberRepository(id).then(setMember)
    }, [id])

    return (
        <CompanyDetail member={member} />
    )
}