import { MemberApi } from "./companyDetail.api-model";

export const getMember = (id: string): Promise<MemberApi> => 
    fetch(`https://api.github.com/users/${id}`)
    .then((response) => response.json());

