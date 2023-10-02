export interface Member {
        "login": string,
        "id": number,
        "avatarUrl": string,
        "name": string,
        "company": string
    }
    
export const createMemberDefault = () => ({
    login: "",
    id: null,
    avatarUrl: "",
    name: "",
    company: ""
})