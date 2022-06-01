import React from 'react'

export default function Head(props) {

  return (
    <>        
      {/* <div className='tema'>
        {/* <input type="checkbox" name='tema' value={props.name}/>{props.name} 
        <box style={{backgroundColor: props.col }} type="checkbox" name={props.name} value='all'/>{props.name}
        
      </div> */}

      <button style={{backgroundColor: props.col }} className='tema'>
          {props.name}
      </button>  
    </>
  )
}