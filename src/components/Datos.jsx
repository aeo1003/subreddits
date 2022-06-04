import React from 'react'
import { Box,Divider,Grid, Paper, Typography } from '@mui/material/'
import * as API from "../services/GetInfo"


const styles = (theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
  },
});

export default function Datos(props) {
  //console.log(props)
  
const test = (url) => {
  window.open(url)
 // console.log(url)
  }



  return (
    <>     
      {/* <div onClick={(e=>test(e,props.url))} style={{backgroundColor: props.col }} className='post'> */}
      <Grid item xs={12} sm={3} mb={3} mr={3}>
        <Paper onClick={e=>test(props.url)} elevation={3} sx={{ height: '80%' }} 
        style={{backgroundColor: props.col, padding: '1rem' }}>
          <Typography mb='1rem' fontSize='1rem'> {props.title} </Typography>      
          <Divider />
          <br/>
          {/* <Divider />
          <Divider textAlign="right">RIGHT</Divider> */}
          <Grid container spacing={2} direction='row'>
            <Grid item xs={6}>
               <Typography fontWeight={600} fontSize='1rem' variant="caption">{props.author}</Typography>
            </Grid>
            <Grid item xs={6} textAlign='right'>
               <Typography fontWeight={600} fontSize='1.5rem' variant="caption">{props.num_comments}</Typography>
            </Grid>
          </Grid>
          
          <Typography fontSize='0.7rem' variant='overline'>{API.UTCtoDate(props.utc)}</Typography>
        </Paper>
      </Grid>
    </>
  )
}
