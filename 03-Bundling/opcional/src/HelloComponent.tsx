import React from "react";
import "./myComponentStyles.scss";

export const HelloComponent: React.FC = () => {
    
    const [name, setName] = React.useState("");

    React.useEffect(() => {
        setName("Lemoncode")
    }, [])
    
    return (
        <div className="title-hello">
            {name}
        </div>
    )
}