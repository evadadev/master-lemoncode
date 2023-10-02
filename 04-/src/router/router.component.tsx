import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CompanyDetailScene, CompanyListScene, RickDetailSecene } from "@/scenes";
import { switchRoutes } from "./routes";
import { RickListScene } from "@/scenes/rick.list.scene";

export const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={switchRoutes.root} element={<CompanyListScene/>} />
                <Route path={switchRoutes.companyList} element={<CompanyListScene/>}/>
                <Route path={switchRoutes.companyDetail} element={<CompanyDetailScene/>}/>
                <Route path={switchRoutes.rickList} element={<RickListScene/>}/>
                <Route path={switchRoutes.rickDetail} element={<RickDetailSecene/>}/>
            </Routes>
        </Router>
    )
}