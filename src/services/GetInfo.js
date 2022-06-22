import React from "react"


export async function getPosts(subreddit) {
try {
    const res = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=50`); //?limit=100
    const data = await res.json();
    let d = []
    console.log('data.data : ',data.data)
    if(data.data !== undefined){
        data.data.children.map(p => {
        (p.data.link_flair_text != 'meta')
          ? d.push(p)
          : null
        })
        return d
      }
    //console.log(d)
    
}catch (error) {
    console.log(error);
    //`<div>No existe ese subreddit</div>`
}

}

export async function getComments(perma) {
  try {
      const splited = perma.split('/')
      const url = 'https://www.reddit.com/r/'+ splited[2] +'/comments/'+ splited[4] +'/data.json'

    //  console.log('url : '+url)
      let d = []


      const res = await fetch(url); //?limit=100
      const data = await res.json();
     // console.log(data)
   
        data[1].data.children.map(p => {
          //console.log(d.length)
          (!p.data.stickied || p.data.body.length > 10)
          ? d.push(p)
          : null
        })
    
      
      return d;
  }catch (error) {
      console.log(error);
  }
  
  }


export function UTCtoDate(utc) {

  let d = new Date(utc*1000);
 // console.log(d);


  // var utcSeconds = utc;
  // var d = new Date(0) // The 0 there is the key, which sets the date to the epoch
  // d.setUTCSeconds(utcSeconds)
  // console.log(d)
  return d.toLocaleDateString();
}

export function getTemas(posts,colores) {

        let filteredArray = [];
        (posts !== undefined && posts.length > 0)
        ?  posts.map(post => {
            (!filteredArray.includes(post.data.link_flair_text)&&(post.data.link_flair_text!='meta'))
              ? filteredArray.push(post.data.link_flair_text)
              : null
            }
        
        )
        : null
        
       let tempArray = [];
       for(let i = 0; i < filteredArray.length; i++){
        let item = {
              'name': filteredArray[i],
               'col': colores[i],
               'selected': true
            };
           tempArray.push(item)
        }
        return tempArray

}


export function prueba (t,v) {
 for(let i = 0; i < t.length; i++){
   if(t[i].name === v){
   //console.log(t[i].name)
   return (t[i].col)
 }
}
}


export function getSelected(t) {
    
  let st = []
  t.map((tema,i) => {
  (tema.selected)
  ? st.push(tema)
  : null
  })
  return st
}

export function test(url){
  window.open(url)
  console.log(url)
  }
  