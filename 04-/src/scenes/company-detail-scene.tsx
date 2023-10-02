import { AppLayout } from "@/layout/app.layout";
import { CompanyDetailContainer } from "@/pods/companyDetail";
import React from "react";


export const CompanyDetailScene: React.FC = () => {

    return (
        <AppLayout>
            <CompanyDetailContainer />
        </AppLayout>
    );
}