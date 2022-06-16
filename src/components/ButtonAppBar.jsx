import * as React from 'react';
import {MenuItem, AppBar, Menu, Toolbar, Typography, IconButton} from '@mui/material';
import { subsContext } from '../Contexts/subs';
import AccountIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { SettingsOutlined } from '@mui/icons-material';
//import useLocalStorage from "react-use-localstorage";



export default function ButtonAppBar() {
  const [isOpen, setIsOpen] = React.useState(true);

  //const [title, setTitle] = React.useLocalStorate("title", "Biology");
  //const [title, setTitle] = React.useState("AskScience");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (e) => {
    setAnchorEl(null);
    //setTitle(e.currentTarget.innerText);
    localStorage.setItem('title', e.currentTarget.innerText)
  };



  return (
  // <div style={{ marginBottom: "30px" }}>
  <AppBar style={{ marginBottom: "2rem", top:"0", width:'100%' }} position="sticky" color="secondary">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={(event) => handleMenuClick(event)}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Futurology</MenuItem>
        <MenuItem onClick={handleMenuClose}>Science</MenuItem>
        <MenuItem onClick={handleMenuClose}>Biology</MenuItem>
      </Menu>
      <Typography variant='h4'> {localStorage.getItem('title')} </Typography>
      <div style={{ marginLeft: "auto" }}>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={(event) => handleMenuClick(event)}
        >
          {/* <Avatar>
            <AccountIcon />
          </Avatar> */}
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
// </div>
)
}
