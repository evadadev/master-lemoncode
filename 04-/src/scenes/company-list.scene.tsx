import React from "react";
import { AppLayout } from "@/layout/app.layout";
import { CompanyListContainer } from "@/pods/companyList/companyList.container";

export const CompanyListScene: React.FC = () => {

    return(
        <AppLayout>
            <CompanyListContainer />
        </AppLayout>
        )
}