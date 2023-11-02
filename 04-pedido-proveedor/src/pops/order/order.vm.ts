export interface  OrderData {
    id: number,
    estado: boolean,
    description: string,
    import: number
} 

export const getOrderData = (): OrderData[] => [
        {id: 1, 
        estado: false,
        description: "torner láser color black",
        import: 120},
        {id: 2,
        estado: false,
        description: "impresora",
        import: 450},
        {id: 3,
        estado: false,
        description: "folios 500 und",
        import: 45}
    ]
