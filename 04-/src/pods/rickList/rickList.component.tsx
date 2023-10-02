import React from "react";
import { Member } from "./rickList.vm";
import { Header } from "@/common/components/header";
import { Link } from "react-router-dom";
import { routes } from "@/router";

interface Props {
    members: Member[];
}
export const RickList: React.FC<Props> = (props) => {
    const { members} = props;

    return (
    <div className="user-list-container">   
    <Header /> 
    {members.map((member) => 
    <> 
        <span>{member.id}</span>
        <img src={member.image} />
        <Link to={routes.rickDetail(member.id)}>{member.name}</Link>
    </>   
    )}
    </div>
    ) 
}