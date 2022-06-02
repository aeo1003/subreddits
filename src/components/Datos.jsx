import React from 'react'
import { Box,Grid, Paper, Typography } from '@mui/material/'


export default function Datos(props) {
  //console.log(props)
  
const test = (url) => {
  window.open(url)
 // console.log(url)
  }

  return (
    <>     
      {/* <div onClick={(e=>test(e,props.url))} style={{backgroundColor: props.col }} className='post'> */}
      <Grid item xs={4}>
        <Paper sx={{ height: 1 }} onClick={(e=>test(props.url))} 
              style={{backgroundColor: props.col, padding: '2rem' }}>
         <Typography variant='outline'> {props.title} </Typography>
        </Paper>  
      </Grid>

    </>

  )
}
