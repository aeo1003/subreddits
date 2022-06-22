import React, { useState, useEffect } from 'react'
import * as API from "../services/GetInfo"
import {Box,Grid} from '@mui/material'
import {Masonry} from '@mui/lab'
import Datos from './Datos'
import { makeStyles } from "@mui/styles"
import ScrollDialog from './ScrollDialog'


import {motion} from 'framer-motion'



export default function BlockOfNews({posts, temas, titu}) {

   const [childData, setChildData] = useState(false)


                                                    const useStyles = makeStyles(() => ({
                                                        container: {
                                                            padding: '10px 10px 10px 10px',
                                                        },
                                                        item: {
                                                            padding: '10px',
                                                                
                                                        },
                                                        }));


    function bgcolor(v) { return API.prueba(temas,v) }

    const [tempComments, setTempComments] = useState([]) 

    const handleMenuClose = (e) => {
        setChildData(false)
    }

    React.useEffect(() => {      
    },[tempComments])
 
    const passData = (e) => {
        setChildData(e)
    }

    const passComments = (e) => {
        if (e && e.length > 0) {
            setTempComments(e)
           return e
        }
    }

    return (
    
    <>
   

    {childData && tempComments ? <ScrollDialog midato={234234}  
    passComments={passComments} passData={passData} 
    tempComments={tempComments} onClose={handleMenuClose} /> : null}
    
        <Box ml={2} mt={4}>
            <Masonry columns={{ xs: 1, sm: 2, md:3, lg:4 }} spacing={2}>
            
            {posts.map(post =>          
                <Grid item key={post.data.created}  xs={4} sm={4} md={2}>
                    
                        <Datos 
                            key={post.data.created_utc} 
                            id={post.data.id}
                            author={post.data.author} 
                            num_comments={post.data.num_comments} 
                            utc={post.data.created_utc} 
                            col={bgcolor(post.data.link_flair_text)} 
                            url={post.data.url} 
                            isChecked={false} 
                            title={post.data.title}
                            subject={post.data.link_flair_text}
                            sub={titu}
                            perma={post.data.permalink}
                            ups = {post.data.ups}
                            passData={passData}
                            passComments={passComments}
                        />
                    
                </Grid>
            
                )}
                
            </Masonry>
          </Box>
         
         
    </>

    )
}