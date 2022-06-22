import * as React from 'react';
import {MenuItem, AppBar, Menu, TextField, Toolbar, Typography, IconButton, Input} from '@mui/material';
import { SubsContext } from '../Contexts/SubsContext';

import AccountIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { SettingsOutlined } from '@mui/icons-material';
import * as API from "../services/GetInfo"
import useScroll from './useScroll'
//import useLocalStorage from "react-use-localstorage";
import MyFormHelperText from './MyFormHelperText'
import BasicTextField from './BasicTextField';



export default function ButtonAppBar(props) {

  const colores = ['#AFDB37','#89C5D3','#8C9DCF','#EAACBD','#E9BB2','#a8D0C6','#b7EDC3','#DEA4C0','#f1ed22','#dcd2d3','#eae4d2','#c6d5d8','#717876','#849498'] 
  //const colores = ['#6b6a6b','#77d4ff','#5e947b','#397198','#85c4c4','#fff777','#1f4c82','#8cb047','#f3cac9','#f3cac9','#b61d33','#be4576','#76e38d','#b268f6','#77fdff','#ffad77','#fc616c','#6867ac','#6867ac','#a75f9a','#309472','#d05171','#ebc057','#dccdbe','#63b0ae','#d8593e']
  let subnames = ['Futurology','Reactjs','Science','Worldnews','Learnjavascript','Technology','Singularity']


  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };



  const { y, x, scrollDirection } = useScroll();  

  const styles = {
    active: {
      //color: 'orange',
      color: 'rgba(20,20,20, 0.5)',
      backgroundColor: 'lightgray',
      visibility: "visible",
      transition: "all 1s"
    },
    hidden: {
      backgroundColor: 'lightgray)',
      visibility: "hidden",      
      transition: "all 0.5s",
      transform: "translateY(-100%)"
    }
  }

  const handleMenuClick = (e) => {
    setNewsub('')
    setAnchorEl(e.currentTarget)
  };

  const handleMenuClose = (e) => {
    setAnchorEl(null);
    
    if (subnames.includes(e.currentTarget.innerText)) {      
      props.onChange(e.currentTarget.innerText)
    }
  };



const stopImmediatePropagation = (e) => {
  e.stopPropagation();
  e.preventDefault();
};


const [newsub, setNewsub] = React.useState('')



const handleKeyPress = (event) => {
  
  const  tempnewsub = document.getElementById('textinput').value
  setNewsub(tempnewsub)

  if(event.key === 'Enter' && newsub.length>0){   
    setAnchorEl(null)
    const  tempnewsub = document.getElementById('textinput').value
    setNewsub(tempnewsub)

   // alert('esto envío a App : ',tempnewsub)
    props.onChange(tempnewsub)

  }
}

  return (
  <AppBar style={ scrollDirection === "up" ? styles.hidden : styles.active }  position="sticky" color="primary">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={(e) => handleMenuClick(e)}
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
          <MenuItem sx={{color: '#888'}} key={index} onClick={(e) => handleMenuClose(e)}>
           <Typography variant='div'> {sub}</Typography>
          </MenuItem>
        ))        
        }          
        
        <br/>
        <MenuItem onClickCapture={stopImmediatePropagation}
          onKeyDown={e => e.stopPropagation()}>
            <form onSubmit={onSubmit}>
            Add sub: <input id='textinput'  type="text" name="fname" 
            onClickCapture={stopImmediatePropagation}  onKeyDown={handleKeyPress}/>           
            {/* <input type="text" onclick="myFunction()" value="Submit"/> */}
            </form>
            </MenuItem>
            
      </Menu>

      {/* <MyFormHelperText onSubmit={(e) => enviar(e)} /> */}
      


      <Typography id='titulo' variant='h4' > {props.value} </Typography>

        {/* <IconButton
          size="xl"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ ml: 2, alignSelf: 'inherit' }}
          onClick={(event) => handleMenuClick(event)}
        >
        <AddCircleOutlineOutlinedIcon />
        </IconButton> */}
      
    </Toolbar>
  </AppBar>
// </div>
)
}
