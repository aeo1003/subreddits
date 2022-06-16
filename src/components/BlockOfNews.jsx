import React, { useState, useEffect } from 'react'
import * as API from "../services/GetInfo"
import {Box,Grid} from '@mui/material'
import {Masonry} from '@mui/lab'
import Datos from './Datos'
import { makeStyles } from "@mui/styles"


export default function BlockOfNews({posts, temas}) {

    function bgcolor(v)
    {
      return API.prueba(temas,v)
    }

    const useStyles = makeStyles(() => ({
        container: {
            padding: '10px 10px 10px 10px',
        },
        item: {
            padding: '10px',
                 
        },
      }));
    

    return (
    
    <>
        <Box padding='0rem 3rem'>
        <Masonry columns={{ xs: 1, sm: 2, md:3, lg:4 }} spacing={2}>
         
          {posts.map(post =>
            <Grid item key={post.data.title} xs={4} sm={4} md={2}>
                <Datos 
                  key={post.data.created_utc} 
                  author={post.data.author} 
                  num_comments={post.data.num_comments} 
                  utc={post.data.created_utc} 
                  col={bgcolor(post.data.link_flair_text)} 
                  url={post.data.url_overridden_by_dest} 
                  isChecked={false} 
                  title={post.data.title}
                  subject={post.data.link_flair_text}
                  />
            </Grid>
            )}
            
          </Masonry>
          </Box>
    
    
    </>

    )
}