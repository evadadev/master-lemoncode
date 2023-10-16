import { AppLayout } from "@/layouts";
import { CatListContainer } from "@/pods/catList";
import React from "react";

export const CatListScene: React.FC = () => {
    return (
        <AppLayout>
            <CatListContainer />
        </AppLayout>
    )
}