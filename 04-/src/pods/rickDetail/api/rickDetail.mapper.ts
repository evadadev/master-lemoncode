import { Member } from "../rickDetail.vm";
import { Apimodel } from "./rickDetail.api-model";

export const mapFromApiToVm = (data: Apimodel): Member => ({
    id: data.id,
    name: data.name,
    status: data.status,
    species: data.species,
    image: data.image
})