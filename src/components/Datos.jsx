import React from 'react'
import { Box,Divider,Grid, Paper, Typography } from '@mui/material/'
import * as API from "../services/GetInfo"
import { makeStyles } from "@mui/styles"
import { createTheme, ThemeProvider } from "@mui/material"

import {motion} from 'framer-motion'


// const mystyles = (theme) => ({
//   root: {
//     padding: theme.spacing(1),
//     [theme.breakpoints.down('md')]: {
//       backgroundColor: theme.palette.secondary.main,
//     },
//     [theme.breakpoints.up('md')]: {
//       backgroundColor: theme.palette.primary.main,
//     },
//     [theme.breakpoints.up('lg')]: {
//       backgroundColor: green[500],
//     },
//   },
// });


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "1rem"
    },
 
  paper: {
    padding: '1rem',
    textAlign: 'right',
    color: '#fa0',
    }
});

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body3'
          },
          style: {
            fontSize: '0.8rem',
            fontWeight: 'lighter',
            color: '#222'
          }
        }
      ]
    }
    }  
  })


export default function Datos(props) {
  //console.log(props)
  
const openSite = (url) => {
  //useStyles()
  window.open(url)
 // console.log(url)
  }

  const classes = useStyles()   

  return (
    <>     
    <ThemeProvider theme={theme}>
    {/* <Grid item xs={12} sm={6} md={12}> */}
    
      <Paper onClick={e=>openSite(props.url)} elevation={5} style={{backgroundColor:'#ddd'}}>
        <Box style={{backgroundColor: props.col}} >
          <Grid container direction='row'>

            <Grid item xs={6} sm={6} md={6} >
              <Typography ml={1}
                         // fontWeight='600' 
                         // fontSize='0.8rem' 
                          variant="body3">{props.num_comments}
              </Typography>
            </Grid>

            <Grid item xs={6} sm={6} md={6} textAlign='end'>
              <Typography mr={1}               
                          fontWeight='600' 
                          fontSize='0.8rem' 
                          variant="caption">{props.subject}
              </Typography>
            </Grid>

          </Grid>
        </Box>
        <Box p={1} style={{cursor:'pointer'}}>
          <Typography fontSize='1rem' variant="caption" align='left'> {props.title} </Typography>
          <br/><br/><br/>
          <Divider />
          <Typography fontSize='.8rem' variant="caption" textAlign='left'> {API.UTCtoDate(props.utc)} </Typography>
        </Box>
      </Paper>
    </ThemeProvider>
    
    </>
  )
}
