export interface Apimodel {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: number
    },
    results: character[]
}

interface character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string,
    },
    image: string,
    episode: string[],
    url: string,
    created: string,
}