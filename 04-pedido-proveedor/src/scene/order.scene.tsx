import React from "react";
import { AppLayout } from "@/layouts";
import { OrderContainer } from "@/pops/order/order.container";
import { CustomerContainer } from "@/pops/customer/customer.container";

export const OrderScene: React.FC = () => {
    return (
        <AppLayout>
            <header><h2>Pedido proveedor</h2></header>
            <CustomerContainer />
            <OrderContainer />
        </AppLayout>
    )
}