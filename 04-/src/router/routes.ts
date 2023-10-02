import { generatePath } from "react-router-dom";

interface SwitchRoutes {
    root: string;
    companyList: string;
    companyDetail: string;
    rickList: string;
    rickDetail: string;
}

export const switchRoutes: SwitchRoutes = {
    root: "/",
    companyList: "/company",
    companyDetail: "/company/:id",
    rickList: "/rick",
    rickDetail: "/rick/:id",   
};

interface Routes extends Omit<SwitchRoutes, "companyDetail" | "rickDetail"> {
    companyDetail: (id: string) => string;
    rickDetail: (id: number) => string;
}


export const routes: Routes = {
    ...switchRoutes,
    companyDetail: (id) => generatePath(switchRoutes.companyDetail, { id }),
    rickDetail: (id) => generatePath(switchRoutes.rickDetail, { id }),
};