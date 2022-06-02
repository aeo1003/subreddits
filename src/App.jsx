import React, { useState, useEffect } from 'react'
import * as API from "./services/GetInfo"
import Datos from './components/Datos'
import Head from './components/Head'
import { Typography, Box, Button, ButtonGroup, Container, Grid, Paper } from '@mui/material'
import Navbar from './components/Navbar'
import { makeStyles } from "@mui/styles"
import { createTheme } from "@mui/material";

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'





export default function App() {

  const [posts, setPosts] = useState([])
  const [temas, setTemas] = useState([])
  const colores = ['#f191c5','#a152b4','#c5f191','#91c5f1','#ba15f2','#a4803f','#ac8184','#fc616c','#656f8d','#2338f2','#f22338','#2de041','#717876','#849498'] 
  //const colores = ['#6b6a6b','#77d4ff','#5e947b','#397198','#85c4c4','#fff777','#1f4c82','#8cb047','#f3cac9','#f3cac9','#b61d33','#be4576','#76e38d','#b268f6','#77fdff','#ffad77','#fc616c','#6867ac','#6867ac','#a75f9a','#309472','#d05171','#ebc057','#dccdbe','#63b0ae','#d8593e']
  
  
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

const clickCat = (e) => {
    console.log(e.target);
  }


function getSelected(t) {
    
    let st = []
    t.map((tema,i) => {
    (tema.selected)
    ? st.push(tema)
    : null
    })
    return st
}

function creaTest() {
  return <Head name='test'/>
}

// const testArray = ['test1','test2','test3','test4']

  return (
    <>            
          
              <Box padding={2} sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                height: '100%',

              }} >
              <Grid padding={1} container spacing={3}>
              {getSelected(temas).map((tema) =>
               <Head key={tema.name} name={tema.name} col={tema.col}/>
              )} </Grid>
           
           </Box>  

            <Container sx={{ marginTop:'2%' }} >        
              <Grid container spacing={5}>
                {posts.map(post =>  
                <Datos key={post.data.id} col={bgcolor(post.data.link_flair_text)} url={post.data.url_overridden_by_dest} isChecked={false} title={post.data.title}  />
              )} </Grid>
            </Container>
{/* 
       

        <ButtonGroup>
              <Button>test1 </Button>
              <Button color='primary' variant='contained'>test2 </Button>
              <Button color='primary' variant='contained'>test3 </Button>
              <Button color='primary' variant='contained'>test4 </Button>
        </ButtonGroup> */}

    </>
  )
}
