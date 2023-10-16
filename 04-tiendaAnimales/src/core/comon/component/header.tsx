import React from "react";
import { Link } from "react-router-dom";

import { switchRoutes } from "@/router";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header: React.FC = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to={switchRoutes.dogList} >{'Perros'}</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 20 }}>
                        <Link to={switchRoutes.catList}>Gatos</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
