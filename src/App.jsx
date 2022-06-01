import React, { useState, useEffect } from 'react'
import * as API from "./services/GetInfo"
import Datos from './components/Datos'
import Head from './components/Head'
import Navbar from './components/Navbar'

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

function checkPosts() {
  let sp = []
  posts.map((post) => {
    console.log(post)
  })
}

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Head />} /> 
        </Routes>
      </BrowserRouter> */}
      
      <header className='navbar'>
      <div className='temas'>
        {getSelected(temas).map((tema) =>  <div onClick={clickCat} key={tema.name} ><Head type="checkbox" 
        name={tema.name} col={tema.col} value='all'/></div>)}
      </div>
      </header>

      <div className='posts'>
        
        {posts.map((post) =>  
          <div key={post.data.title}>
            <Datos col={bgcolor(post.data.link_flair_text)} isChecked={false} author={post.data.title} value='all' />
          </div>
        )}
      </div>
    </>
  )
}
