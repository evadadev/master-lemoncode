import React from "react";
import { Member } from "./rickDetail.vm";
import { Link } from "react-router-dom";
import { routes } from "@/router";

interface Props {
    member: Member;
}

export const RickDetail: React.FC<Props> = (props) => {
    const { member } = props;
    return (
        <>
        <div className="detail-container">
            <div>
                <img src={member.image} />
            </div>
            <div>
                <h1>nombre: {member.name}</h1>
                <h2>id: {member.id}</h2>
                <h2>especie: {member.species}</h2>
                <h2>estado: {member.status}</h2>
            </div>
            <Link to={routes.rickList}>Back to Rick and Morty</Link>
        </div>
        </>
    )
}