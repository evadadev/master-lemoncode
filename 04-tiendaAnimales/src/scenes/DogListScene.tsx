import { AppLayout } from "@/layouts";
import { DogListContainer } from "@/pods/dogList";
import React from "react";

export const DogListScene: React.FC = () => {
    return (
        <AppLayout>
            <DogListContainer />
        </AppLayout>
    )
}