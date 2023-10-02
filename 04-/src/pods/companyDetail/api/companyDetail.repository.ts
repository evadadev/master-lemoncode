import { getMember } from "./companyDetail.api";
import { mapFromApiToVm } from "./companyDetail.mapper"

export const getMemberRepository = (member) => {
    return getMember(member).then(mapFromApiToVm);
}