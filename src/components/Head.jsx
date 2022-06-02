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
            fontSize: 16,
          }
        }
      ]
    }
  }
  })

  const Head = (props) => {
  return (
    <>        
      <Grid item xs={2}>
        <ThemeProvider theme={theme} >
        <Paper sx={{padding: 1, width: 1, backgroundColor: props.col,  display:"flex",
    justifyContent:"center" }} >
          <Typography variant='body3' sx={{ fontWeight: 'bold' }}>
            {props.name}
          </Typography>
        </Paper>
        </ThemeProvider>
      </Grid>
   
    </>
  )
}

export default Head