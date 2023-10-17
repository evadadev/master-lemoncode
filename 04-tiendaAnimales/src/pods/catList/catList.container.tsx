import React from "react";
import { pets } from "@/core/comon/db";
import { PetsList } from "../pets/petsComponents";


export const CatListContainer: React.FC = () => {
    const cats = pets.filter((pet) => pet.type === "cat")
    
    return (
        <PetsList items={cats}/>
    )
}