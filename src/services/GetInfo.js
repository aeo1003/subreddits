import React from "react"

export let testVar = 'esto es una prueba de contexto'

export async function getPosts(subreddit) {
try {
    const res = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=50`); //?limit=100
    const data = await res.json();
    let d = []
    data.data.children.map(p => {
     (p.data.link_flair_text != 'meta')
       ? d.push(p)
       : null
    })
    return d;
}catch (error) {
    console.log(error);
}

}

export async function getComments(perma) {
  try {
     // const res = await fetch(`https://www.reddit.com/r/${sub}/comments/${id}/data.json`); //?limit=100
      //const res = await fetch(`https://www.reddit.com/r/${sub}/comments/${id}/data.json`); //?limit=100
     // https://www.reddit.com/r/comments/vf4l0u/data.json
      const splited = perma.split('/')
    //  console.log(splited)
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
        posts.map(post => {
          (!filteredArray.includes(post.data.link_flair_text)&&(post.data.link_flair_text!='meta'))
             ? filteredArray.push(post.data.link_flair_text)
             : null
          }
        )

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
  