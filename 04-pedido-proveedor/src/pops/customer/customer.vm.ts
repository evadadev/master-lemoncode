export interface Customer {
    number: number,
    provider: string,
    fecha: string
}

export const getCustomer = (): Customer => ({
    number: 152206,
    provider: "DUNDER MUFFLIN SL",
    fecha: "2010-04-10"
})