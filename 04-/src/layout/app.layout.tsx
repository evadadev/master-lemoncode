import { routes } from "@/router";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
    const { children } = props;

    return (
        <>
        <header className="header">
            <div className="div-header">
                <Link to={routes.companyList}>Busca tu compañía</Link>
                <Link to={routes.rickList}>Rick and Morty</Link>
            </div>            
        </header>
        <section>{ children }</section>
        <footer className="footer">
            <div className="div-header">
                React Básico. Eva Díaz
            </div>
        </footer>
        </>
    )
}