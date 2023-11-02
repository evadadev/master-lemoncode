import React from "react";
import { OrderContext } from "@/common";

export const CustomerOrder: React.FC = () => {
    const { order } = React.useContext(OrderContext);
    const [amount, setAmount ] = React.useState(0);
    const [status, setStatus ] = React.useState(0);
    const [disabled, setDisabled ] = React.useState(true);

    React.useEffect(() => {
        const orderValidated = order.filter((item) => item.estado)
        setAmount(orderValidated.reduce((acc, current) => acc + current.import, 0))
        setStatus((orderValidated.length * 100) / order.length)
        setDisabled(!order.every((item) => item.estado))
    }, [order])

    return (
        <>
            <label>Import total
                <input type="string" disabled value={`${amount.toFixed(2)} €`}/>
            </label>
            <label >Estado
                <input type="string" disabled value={`${status.toFixed(2)} %`}/>
            </label>
            <button type="button" disabled={disabled}>Enviar</button>
        </>
    )
}