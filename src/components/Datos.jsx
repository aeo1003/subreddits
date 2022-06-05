import React from 'react'
import { Box,Divider,Grid, Paper, Typography } from '@mui/material/'
import * as API from "../services/GetInfo"
import { makeStyles } from "@mui/styles"
import { createTheme, ThemeProvider } from "@mui/material"




const mystyles = (theme) => ({
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
        <Box padding='.3rem .3rem' style={{backgroundColor: props.col}} >
          <Grid container direction='row'>
            <Grid item xs={6} sm={6} md={6} >
              <Typography ml={1}
                          fontWeight='600' 
                          fontSize='0.8rem' 
                          variant="bold">{props.num_comments}
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
        <Box p={1}>
          <Typography fontSize='1rem' variant="caption" align='left'> {props.title} </Typography>
          <br/><br/><br/>
          <Divider />
          <Typography fontSize='.8rem' variant="caption" textAlign='left'> {API.UTCtoDate(props.utc)} </Typography>
        </Box>
      </Paper>
    {/* </Grid> */}
      {/* <div onClick={(e=>test(e,props.url))} style={{backgroundColor: props.col }} className='post'> */}

    {/*  <Grid item xs={12} sm={6} md={4}>
        <Paper onClick={e=>openSite(props.url)} elevation={3} style={{backgroundColor: props.col, padding: '1rem' }}>
          <Typography > {props.title} </Typography>      
          <Divider />
          <Grid container direction='column' justify='space-around' alignItems='start'>
                <Grid border='1px solid green' item xs={12} sm={6} md={4}>
                  <Typography  variant='caption'> {props.author} </Typography>
                </Grid>
                <Grid border='1px solid green' item xs={12} sm={6} md={4}>
                  <Typography  variant='caption'> {props.author} </Typography>
                  <Typography  variant='caption'> {props.author} </Typography>
                </Grid>
                <Grid border='1px solid green' item xs={12} sm={6} md={4}>
                  <Typography  variant='caption'> {props.author} </Typography>
                </Grid>
          </Grid>
          

           <Grid container direction='column' justify='space-around' alignItems='start'>
                <Grid border='1px solid green' item xs={12}>
                  <Typography  variant='caption'> {props.author} </Typography>
                  <Typography  variant='caption'> {props.author} </Typography>
                  <Typography  variant='caption'> {props.author} </Typography>
                </Grid>
                <Grid border='1px solid green' item xs={12}>
                  <Typography  variant='caption'> {props.author} </Typography>
                </Grid>
                <Grid border='1px solid green' item xs={12}>
                  <Typography  variant='caption'> {props.author} </Typography>
                </Grid>
                <Grid border='1px solid green' item xs={12}>
                  <Typography  variant='caption'> {props.author} </Typography>
                </Grid>
                <Grid border='1px solid green' item xs={12}>
                  <Typography  variant='caption'> {props.author} </Typography>
                </Grid>
         </Grid>
         */}
          
          {/* <Grid container direction='row' 
          border='1px solid green' 
          rowSpacing={{ xs: .4, sm: .4, md: .4}} 
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            
            <Grid container direction='column' display='flex' justifyContent='flex-end'
            border='1px solid red'
            rowSpacing={1} 
            columnSpacing={{ xs: 4, sm: 4, md: 4}}>
              <Grid item xs={6}>
                <Typography variant='caption'> {props.author} </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography textAlign='center' variant='body3'> {API.UTCtoDate(props.utc)} </Typography>
              </Grid>

              <Grid item xs={6}  textAlign='right'>
                <Typography variant='h5'> {props.num_comments} </Typography>
                
              </Grid>
            </Grid>
          </Grid> 
        </Paper>
      </Grid>*/}

    </ThemeProvider>
    </>
  )
}
