export interface PetsCart {
    id: number;
    picUrl: string;
    title: string;
    type: string;
}

export interface PetsCartList extends PetsCart {
    selected: boolean;
}