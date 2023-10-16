import React from "react";
import { CatsList } from "./catList.component";
import { pets } from "@/core/comon/db";


export const CatListContainer: React.FC = () => {
    const cats = pets.filter((pet) => pet.type === "cat")
    
    return (
        <CatsList pets={cats}/>
    )
}

