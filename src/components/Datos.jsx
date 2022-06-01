import React from 'react'

export default function Datos(props) {
  //console.log(props)
  
  return (
    <>     
      <div style={{backgroundColor: props.col }} className='post'>
          {props.author}
      </div>  
            
    </>

  )
}
