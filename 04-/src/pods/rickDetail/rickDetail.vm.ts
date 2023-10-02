export interface Member {
    id: number,
    name: string,
    status: string,
    species: string,
    image: string,
}

export const createMemberDefault = () => ({
    id: null,
    name: "",
    status: "",
    species: "",
    image: "",
})