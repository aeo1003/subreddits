import React, { useState, useEffect } from 'react'
import * as API from "./services/GetInfo"
import { makeStyles } from "@mui/styles"
import {MenuItem, AppBar, Menu, Toolbar, Typography, IconButton} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import  ButtonAppBar  from './components/ButtonAppBar'
import './App.css'
import BlockOfNews from './components/BlockOfNews'
import { SubsContext } from './Contexts/SubsContext'
//import {title} from './components/ButtonAppBar';

const useStyles = makeStyles(() => ({
  container: {
      padding: '10px 10px 10px 10px',
  },
  item: {
      padding: '10px',
           
  },
}));


export default function App() {

  const [posts, setPosts] = useState([])
  const [temas, setTemas] = useState([])
  const [title, setTitle] = useState('Futurology')

  
  useEffect(()=> {
    API.getPosts('Futurology').then(setPosts)
   // localStorage.setItem('title', 'futurology')
  },[])

  useEffect(()=> {  
    setTemas(API.getTemas(posts,colores))
  },[posts])

 function actualiza(title) {
  setTitle(title)
  API.getPosts(title).then(setPosts)
 }

  const colores = ['#AFDB37','#89C5D3','#8C9DCF','#EAACBD','#E9BB2','#a8D0C6','#b7EDC3','#DEA4C0','#f1ed22','#dcd2d3','#eae4d2','#c6d5d8','#717876','#849498'] 
  //const colores = ['#6b6a6b','#77d4ff','#5e947b','#397198','#85c4c4','#fff777','#1f4c82','#8cb047','#f3cac9','#f3cac9','#b61d33','#be4576','#76e38d','#b268f6','#77fdff','#ffad77','#fc616c','#6867ac','#6867ac','#a75f9a','#309472','#d05171','#ebc057','#dccdbe','#63b0ae','#d8593e']
  const subnames = ['Futurology','Reactjs','Science','Nature','History','Technology','Singularity']

  const classes = useStyles()






  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  };

  const handleMenuClose = (e) => {
    setAnchorEl(null);
    if (subnames.includes(e.currentTarget.innerText)) {      
      actualiza(e.currentTarget.innerText)
      //setAnchorEl(null)
    }
  };





  return (
    <>            
      {/* <ButtonAppBar /> */}

    <AppBar style={{ marginBottom: "2rem", top:"0", width:'100%' }} position="sticky" color="primary">
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
          // <MenuItem key={index} onClick={handleMenuClose}>{sub}</MenuItem>
          <MenuItem key={index} onClick={(e) => handleMenuClose(e)}>{sub}</MenuItem>
        ))}



      </Menu>
      <Typography variant='h4'> {title} </Typography>
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










  
      <BlockOfNews posts={posts} temas={temas}/>
    </>
  )
}
