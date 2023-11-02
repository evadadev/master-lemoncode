import React from "react";
import { OrderContext } from "@/common/provider";
import { Order } from "./order.componet";


export const OrderContainer: React.FC = () => {
    const {order} = React.useContext(OrderContext);
    return (
            <Order orderItems={order}/>   
    )
}