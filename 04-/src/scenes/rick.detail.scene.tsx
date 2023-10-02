import React from "react";
import { AppLayout } from "@/layout/app.layout";
import { RickDetailContainer } from "@/pods/rickDetail/rickDetail.container";

export const RickDetailSecene: React.FC = () => {

    return (
        <AppLayout >
            <RickDetailContainer />
        </AppLayout>
    )
}