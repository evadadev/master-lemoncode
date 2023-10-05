import { fetchMembers } from "./companyList.api"
import { mapFromApiToVm } from "./companyList.mapper"

export const fetchMembersRepository = (company) => { 
    return fetchMembers(company)
    .then( (result) => result.length ? mapFromApiToVm(result) : [])
}  
