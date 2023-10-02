import React from "react";
import { Member } from "../companyList.vm";
import { Link } from "react-router-dom";
import { routes } from "@/router/routes";

interface Props {
    member: Member;
}
export const MembersTableRow: React.FC<Props> = (props) => {
    const { member } = props;

    return (
        <>
        <span>{member.id}</span>
        <img src={member.avatarUrl} />
        <Link to={routes.companyDetail(member.login)}>{member.login}</Link>
        </>
    )
}