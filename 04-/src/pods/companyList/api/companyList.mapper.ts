import { MemberApi } from "./companyList.api-model";
import { Member } from "../companyList.vm";

export const mapFromApiToVm = (items: MemberApi[]): Member[] => {
    return items.map((item) => ({
        id: item.id,
        avatarUrl: item.avatar_url,
        login: item.login,
    }))
};