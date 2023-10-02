import { AppLayout } from "@/layout/app.layout";
import { RickListContainer } from "@/pods/rickList/rickList.container";
import React from "react";

export const RickListScene: React.FC = () => {

    return (
        <AppLayout>
            <RickListContainer />
        </AppLayout>
    )
} 