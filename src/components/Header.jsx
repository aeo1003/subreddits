import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
//import { FileDownload } from "@mui/icons-material/AcUnitRounded";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">testing</Typography>
                {/* <FileDownload /> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header