import { FC } from "react";

import "./mystyle.scss";
import logoImg from "./content/logo_1.png";

export const HelloComponent: FC = () => {

    const user: string = " éste es mi opcional de Vite";

    return (
        <>
            <h1 className= "background">Hola {user}</h1>
            <div id="imgContainer">
                <img src={logoImg} />
            </div>
        </>
    )
    
}