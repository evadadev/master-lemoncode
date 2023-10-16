import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { DogListScene, CatListScene } from "@/scenes";

export const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={switchRoutes.root} element={<DogListScene />}/>
                <Route path={switchRoutes.dogList} element={<DogListScene />}/>
                <Route path={switchRoutes.catList} element={<CatListScene />}/>
            </Routes>
        </Router>
    )
}