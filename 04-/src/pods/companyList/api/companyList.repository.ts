import { fetchMembers } from "./companyList.api"
import { mapFromApiToVm } from "./companyList.mapper"


export const fetchMembersRepository = (company) => fetchMembers(company).then(mapFromApiToVm);
