import React from "react";
import { Member } from "./companyDetail.vm";
import { Link } from "react-router-dom";
import { routes } from "@/router";

interface Props {
    member: Member
}

export const CompanyDetail: React.FC<Props> = (props) => {
    const { member } = props;
    return (
        <>
        <div className="detail-container">
            <div>
            <img src={member.avatarUrl} />
            </div>
            <div>
                <h1>nombre: {member.name}</h1>
                <h2>acceso: {member.login}</h2>
                <h2>id: {member.id}</h2>
                <h2>compañía: {member.company}</h2>
            </div>
        </div>
        <Link to={routes.companyList}>Back to company </Link>
        </>
    )
}