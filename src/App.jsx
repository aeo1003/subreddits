import React, { useState, useEffect } from 'react'
import * as API from "./services/GetInfo"
import Datos from './components/Datos'
import Head from './components/Head'
import { Typography, Box, Button, ButtonGroup, Container, Drawer, Grid, Paper, styled } from '@mui/material'
import Navbar from './components/Navbar'
import { makeStyles } from "@mui/styles"
import { createTheme } from "@mui/material"
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import  ButtonAppBar  from './components/ButtonAppBar'
import './App.css'

const useStyles = makeStyles(() => ({
  container: {
      // border: '9px solid red',
      
      padding: '10px',
  },
  item: {
      padding: '10px',
      // border: '1px solid lightblue',
      
  },
}));


export default function App() {


  const BlueButton = styled(Button)({
    backgroundColor: 'skyblue',
    color: '#888',
    margin: 5,
    '&:hover': {
      backgroundColor: '#ccc',
      color: '#222'
      },
    '&:disabled': {
      backgroundColor: 'gray',
      color: 'white'
      },
      '&:active': {
        backgroundColor: 'green',
        color: 'black'
        },
    })



  const [posts, setPosts] = useState([])
  const [temas, setTemas] = useState([])
  const colores = ['#AFDB37','#89C5D3','#8C9DCF','#E8ACBD','#FEDBB2','#A8D0C6','#F7EDC3','#DEA4C0','#f1ed22','#dcd2d3','#eae4d2','#c6d5d8','#717876','#849498'] 
  //const colores = ['#6b6a6b','#77d4ff','#5e947b','#397198','#85c4c4','#fff777','#1f4c82','#8cb047','#f3cac9','#f3cac9','#b61d33','#be4576','#76e38d','#b268f6','#77fdff','#ffad77','#fc616c','#6867ac','#6867ac','#a75f9a','#309472','#d05171','#ebc057','#dccdbe','#63b0ae','#d8593e']
  
  const classes = useStyles()
  
  useEffect(()=> {
    API.getPosts().then(setPosts)
  },[])

  useEffect(()=> {  
    setTemas(API.getTemas(posts,colores))
  },[posts])


function bgcolor(v)
{
  return API.prueba(temas,v)
}

// const testArray = ['test1','test2','test3','test4']

  return (
    <>            
          <ButtonAppBar position='static'/>

          {/* <Box className='sti'> */}
            {/* <Box className='sti' padding={3} sx={{ backgroundColor: '#f1edee' }}> */}
                <Grid container spacing={2.5} className='sti' >
                {/* className={classes.container} */}
                  {API.getSelected(temas).map((tema) => <Head key={tema.name} name={tema.name} col={tema.col}/> )} 
                </Grid>           
            {/* </Box> */}
          {/* </Box> */}

          <br/><br/><br/><br/>
{/* 
          <BlueButton> test </BlueButton>
          <Button> test2</Button> */}
          
          {/* <Box padding={4}>         */}
            {/* <Grid container spacing={5}> */}
            <Grid container justifyContent='center' direction="row" ml={1} mr={1}>
              {posts.map(post =>  
                <Datos 
                  key={post.data.created_utc} 
                  author={post.data.author} 
                  num_comments={post.data.num_comments} 
                  utc={post.data.created_utc} 
                  col={bgcolor(post.data.link_flair_text)} 
                  url={post.data.url_overridden_by_dest} 
                  isChecked={false} 
                  title={post.data.title}/>
                )} 
            </Grid>
          {/* </Box> */}
          

    </>
  )
}
