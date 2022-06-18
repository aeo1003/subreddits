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
   
  },[])

  useEffect(()=> {  
    setTemas(API.getTemas(posts,colores))
    setTitle(title)
  },[posts])

  const reloadPosts = (title) => {
    setTitle(title)
    API.getPosts(title).then(setPosts)
  }

  const colores = ['#AFDB37','#89C5D3','#8C9DCF','#EAACBD','#E9BB2','#a8D0C6','#b7EDC3','#DEA4C0','#f1ed22','#dcd2d3','#eae4d2','#c6d5d8','#717876','#849498'] 
  const subnames = ['Futurology','Reactjs','Science','Worldnews','History','Technology','Singularity']

  // const classes = useStyles()
  
  return (
    <>            
      <ButtonAppBar onChange={(e) => reloadPosts(e)} value={title} />
      <BlockOfNews posts={posts} temas={temas}/>
    </>
  )
}
