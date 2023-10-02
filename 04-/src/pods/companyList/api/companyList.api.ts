import { MemberApi } from "./companyList.api-model";

export const fetchMembers = (company: string): Promise<MemberApi[]> =>  
        fetch(`https://api.github.com/orgs/${company}/members`)
        .then((response) => response.json());
