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
                <h1>{member.name}</h1>
                <h2>{member.login}</h2>
                <h2>{member.id}</h2>
                <h2>{member.company}</h2>
            </div>
        </div>
        <Link to={routes.companyList}>Back to company </Link>
        </>
    )
}