import { Header } from "@/core/comon/component/header";
import { CartContainer } from "@/pods/cart";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
    const { children } = props;
    return (
        <>
            <header><Header/></header>  
            <main className="layout-app-container">
                <section>
                {children}
                </section>
                <aside>
                    <CartContainer /> 
                </aside>
            </main>
        </>
    )
}