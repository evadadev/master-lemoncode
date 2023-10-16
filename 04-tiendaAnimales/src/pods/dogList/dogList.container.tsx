import React from "react";
import { pets } from "@/core/comon/db";
import { DogList } from "./dogList.component";


export const DogListContainer: React.FC = () => {
    const dogs = pets.filter((pet) => pet.type === "dog")

    return(
        <DogList pets={dogs}/> 
    )
}