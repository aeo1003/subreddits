import React from 'react'
import { Typography, Button, ButtonGroup, Container, Grid, Paper } from '@mui/material'
import { ThemeProvider } from "@mui/material/styles"
import { createTheme } from '@mui/material/styles'


const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body3'
          },
          style: {
            fontSize: '1.7rem',
            fontWeight: 'bold',
            color: '#fff'
          }
        }
      ]
    }
  }
  })

  const Head = (props) => {
  return (
    <>
    {/* <Container fixed> */}
      <Grid item xs={1}>
        <ThemeProvider theme={theme} > {/* ATENCION A ESTA LINEA */}
         {/* <Paper>{props.name}</Paper>
           <Paper sx={{padding: .1, gap:2, backgroundColor: props.col, display:"block", justifyContent:"center" }}>
            <Typography variant='overline' sx={{ fontWeight: 'bold'}}>
              {props.name}
            </Typography>
          </Paper> */}
        </ThemeProvider>
      </Grid>
    {/* </Container> */}
   
    </>
  )
}

export default Head