import React from "react";
import { Header } from "@/common/components/header";
import { Member } from "./companyList.vm";
import { MembersTableRow } from "./component/membersTableRow";

interface Props {
    members: Member[];
}

export const CompanyList: React.FC<Props> = (props) => {
    const { members } = props;
    return (
            <div className="user-list-container">
            <Header />  
            {members.length ? members.map((member) => (
                <MembersTableRow key={member.id} member={member}/>
            )) : <div>no hay miembros</div> }
            </div>
    );
}