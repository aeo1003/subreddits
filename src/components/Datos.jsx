import React from 'react'
import { Box,Grid, Paper, Typography } from '@mui/material/'
import * as API from "../services/GetInfo"


export default function Datos(props) {
  //console.log(props)
  
const test = (url) => {
  window.open(url)
 // console.log(url)
  }

  return (
    <>     
      {/* <div onClick={(e=>test(e,props.url))} style={{backgroundColor: props.col }} className='post'> */}
      <Grid item xs={3}>
        <Paper elevation={2} sx={{ height: 1 }} onClick={(e=>test(props.url))} style={{backgroundColor: props.col, padding: '1rem' }}>
         <Typography variant='outline'> {props.title} </Typography>      
          <br/><br/>
        <Typography variant='caption'> {API.UTCtoDate(props.utc)} </Typography>
        </Paper>
      </Grid>

    </>

  )
}
