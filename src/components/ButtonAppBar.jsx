import * as React from 'react';
import {MenuItem, AppBar, Menu, Toolbar, Typography, IconButton} from '@mui/material';
import { SubsContext } from '../Contexts/SubsContext';
import AccountIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { SettingsOutlined } from '@mui/icons-material';
import * as API from "../services/GetInfo"
import useScroll from './useScroll'
//import useLocalStorage from "react-use-localstorage";



export default function ButtonAppBar(props) {

  const colores = ['#AFDB37','#89C5D3','#8C9DCF','#EAACBD','#E9BB2','#a8D0C6','#b7EDC3','#DEA4C0','#f1ed22','#dcd2d3','#eae4d2','#c6d5d8','#717876','#849498'] 
  //const colores = ['#6b6a6b','#77d4ff','#5e947b','#397198','#85c4c4','#fff777','#1f4c82','#8cb047','#f3cac9','#f3cac9','#b61d33','#be4576','#76e38d','#b268f6','#77fdff','#ffad77','#fc616c','#6867ac','#6867ac','#a75f9a','#309472','#d05171','#ebc057','#dccdbe','#63b0ae','#d8593e']
  const subnames = ['Futurology','Reactjs','Science','Worldnews','History','Technology','Singularity']


  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  };

  const handleMenuClose = (e) => {
    setAnchorEl(null);
    if (subnames.includes(e.currentTarget.innerText)) {      
      props.onChange(e.currentTarget.innerText)
    }
  };



  const { y, x, scrollDirection } = useScroll();  

  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s"
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)"
    }
  }

React.useEffect(() => {
<AppBar style={ styles.active } />
})

  return (
  // <AppBar style={{ marginBottom: "2rem", top:"0", width:'100%' }} position="sticky" color="primary">
  <AppBar style={ scrollDirection === "up" ? styles.hidden : styles.active } position="sticky" color="primary">
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


        {subnames.map((sub, index) => (
          <MenuItem sx={{color: '#222'}} key={index} onClick={(e) => handleMenuClose(e)}>{sub}</MenuItem>
        ))}

      </Menu>
      <Typography id='titulo' variant='h4' > {props.value} </Typography>

        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          //sx={{ mr: 2 }}
          onClick={(event) => handleMenuClick(event)}
        >
          {/* <Avatar>
            <AccountIcon />
          </Avatar> */}
        </IconButton>

    </Toolbar>
  </AppBar>
// </div>
)
}
