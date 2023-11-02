import React from "react";
import { getOrderData, OrderData } from "@/pops/order/order.vm";

interface Context {
    order: OrderData[],
    setOrder: (order: OrderData[]) => void;
}

export const OrderContext = React.createContext<Context>(null);

interface Props {
    children: React.ReactNode;
}

export const ValidaProvider: React.FC<Props> = (props) => {
    const { children } = props;
    const [validation, setValidation] = React.useState(getOrderData);
    return (
        <OrderContext.Provider
        value={{
            order: validation,
            setOrder: setValidation,
        }}
        >
            {children}
        </OrderContext.Provider>
    )
}