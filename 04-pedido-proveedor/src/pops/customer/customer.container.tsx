import React from "react";
import { CustomerInfo } from "./customer.info";
import { CustomerOrder } from "./customer.order";
import { getCustomer } from "./customer.vm";


export const CustomerContainer: React.FC = () => {
    const [customer ] = React.useState(getCustomer());

    return(
        <div className="customer-container">
            <CustomerInfo item={customer}/>
            <CustomerOrder />
        </div>
    )
}