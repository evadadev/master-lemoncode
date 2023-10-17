import React from "react";
import { pets } from "@/core/comon/db";
import { PetsList } from "../pets/petsComponents";


export const DogListContainer: React.FC = () => {
    const dogs = pets.filter((pet) => pet.type === "dog")

    return(
        <PetsList items={dogs}/> 
    )
}