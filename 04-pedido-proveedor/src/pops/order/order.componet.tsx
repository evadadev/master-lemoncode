import React from "react";
import { OrderContext } from "@/common/provider";
import { OrderData } from "./order.vm";


interface Props {
    orderItems: OrderData[]
}
export const Order: React.FC<Props> = (props) => {
    const { orderItems } = props;
    const [validar, setValidar] = React.useState([]);
    const {setOrder } = React.useContext(OrderContext);
    
    const handleOnCHange = (id) => (e) => {
        setValidar(e.target.checked === true ? [...validar, id] : validar.filter((item) => item !== id))
    }

    const handleOnClickValidation = () => {
        setOrder( orderItems.map((item) => ({
            ...item,
            estado: validar.includes(item.id) ? true : item.estado
        })))
        setValidar([])
    }

    const handleOnClickUnValidation = () => {
        setOrder(orderItems.map((item) => ({
            ...item,
            estado: !validar.includes(item.id) ? item.estado : false
        })))
        setValidar([])
    }

    const isValidate = (id) => validar.includes(id)
    

    return (
        <>
        <div className="validation-container">
        <button onClick={handleOnClickValidation}>Validar</button>
        <button onClick={handleOnClickUnValidation}>Invalidar</button>
        </div>
        <div className="order-container">
        <table>
                    <thead>
                        <tr className="table-header">
                            <th></th>
                            <th><h2>Estado</h2></th>
                            <th><h2>Depcrición</h2></th>
                            <th><h2>Importe</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderItems.map((item) => (
                            <tr>
                                <td><input type="checkbox" onChange={handleOnCHange(item.id)} checked={isValidate(item.id)}/></td>
                                <td>{item.estado === true ? "validado" : "pendiente"}</td>
                                <td>{item.description}</td>
                                <td>{item.import}€</td>
                            </tr>
                    ))}
                    </tbody>
            </table>
        </div>
        </>
    )
}