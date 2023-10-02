import { Member } from "../companyDetail.vm";
import { MemberApi } from "./companyDetail.api-model";

export const mapFromApiToVm = (member: MemberApi): Member => ({
    login: member.login,
    id: member.id,
    avatarUrl: member.avatar_url,
    name: member.name,
    company: member.company,
});