import React from 'react';
import { Customer } from './customer.vm';

interface Props {
    item: Customer
};

export const CustomerInfo: React.FC<Props> = (props) => {
    const { item } = props;

    return (
            <>     
            <label>Número
                <input placeholder="Número" value={item.number}/>
            </label>
            <label>Proveedor
                <input placeholder="Nombre" value={item.provider}/>
            </label>
            <label>Fecha
                <input type="date" value={item.fecha}/>
            </label>
            </>
    )
}