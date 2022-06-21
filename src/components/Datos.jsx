import React from 'react'
import { Box,Divider,Grid, Paper, Typography, IconButton} from '@mui/material/'
import * as API from "../services/GetInfo"
import { makeStyles } from "@mui/styles"
import { createTheme, ThemeProvider } from "@mui/material"
import ForumIcon from '@mui/icons-material/Forum';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import {motion} from 'framer-motion'
import ScrollDialog from './ScrollDialog'


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

const [comments, setComments] = React.useState([])
const [modalUp, setModalUp] = React.useState(false)


const handleCommentsClick = (e) => {
   // API.getComments(props.sub,props.id).then(setComments)
   API.getComments(props.perma).then(setComments)
    console.log('leleleleel')
   //passTheComments()
   if(comments.length>0){
    props.passData(true)
    setModalUp(true)
   }
   //console.log('e.currentTarget : '+e)
}

React.useEffect(() => {
 if ((comments) && (comments.length > 0)){

    props.passComments(comments)
    props.passData(true)
    setModalUp(true)
   //console.log('ahora sí : ',comments)
  }
}, [comments])

  return (
    <>     
    
    <ThemeProvider theme={theme}>
      <Paper  elevation={5} style={{backgroundColor:'#ddd'}}>

          <Grid container direction='row' style={{backgroundColor: props.col}} display='-ms-inline-flexbox'>                        
            <Grid item xs={1} sm={1} md={1} p={0.5}>

                    <ThumbUpAltOutlinedIcon />

            </Grid>
            <Grid item xs={1} sm={1} md={1} p={0.5} textAlign='start' ml={1}>
                    <Typography 
                        sx={{fontWeight: '400', fontSize: '0.8rem'}}
                        variant="display1"                       
                        >{props.ups}
                    </Typography>

            </Grid>

            <Grid item xs={9} sm={9} md={9} p={0.5} textAlign='end'>
              <Typography mr={1}               
                          fontWeight='600' 
                          fontSize='0.8rem' 
                          variant="display1">{props.subject}
              </Typography>
            </Grid>
          </Grid>

        <Box onClick={()=>openSite(props.url)} p={1} style={{cursor:'pointer'}}>
          <Typography fontSize='1rem' variant="caption" align='right'> {props.title} </Typography>
        </Box>
        <Box p={1}>
          <Divider />
          <Box p={0} sx={{display: 'flex', flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Typography variant="body3" > {API.UTCtoDate(props.utc)} </Typography>

              
              <IconButton
                size="small"
                color="inherit"
                aria-label="menu"
                onClick={(e) => handleCommentsClick(e)}
              >
                   <Typography 
                      mr={1}
                      variant="body3">{props.num_comments}
                  </Typography>
                  <ForumOutlinedIcon />
              </IconButton>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
    
    </>
  )
}
