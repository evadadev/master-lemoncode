import React from "react";
import { AppLayout } from "@/layout/app.layout";
import { CompanyDetailContainer } from "@/pods/companyDetail";


export const CompanyDetailScene: React.FC = () => {

    return (
        <AppLayout>
            <CompanyDetailContainer />
        </AppLayout>
    );
}