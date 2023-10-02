import { Member } from "../rickList.vm";
import { Apimodel } from "./rickList.apiModel";

export const mapFromApiToVm = (members: Apimodel): Member[] => {
    return members.results.map((member) => ({
        id: member.id,
        name: member.name,
        status: member.status,
        species: member.species,
        image: member.image,
    }))
};