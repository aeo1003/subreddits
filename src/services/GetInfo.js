
export async function getPosts() {
try {
    //const res = await fetch('https://old.reddit.com/r/Futurology/?count=125&after=t3_v1vjbk')
    const res = await fetch('https://old.reddit.com/r/Futurology.json');
    const data = await res.json();
    
    return data.data.children;
}catch (error) {
    console.log(error);
}

}

export function getTemas(posts,colores) {

//  if(posts.length > 0 && !posts==='undefined'){ 

       // console.log('entro');
        let filteredArray = [];
        posts.map(post => {
          !filteredArray.includes(post.data.link_flair_text)
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
          // console.log(tempArray)
        }
        //console.log('temparray : '+tempArray)
        return tempArray
  //  }
}


export function bgcolor(te, t) {
  te.map(tema => {
    if(tema.name === t)
      //console.log('eeeeeeeeee'+tema.col)
      return (tema.col)
       //'sdlfk'
  })
}

export function prueba (t,v) {
 for(let i = 0; i < t.length; i++){
   if(t[i].name === v){
   //console.log(t[i].name)
   return (t[i].col)
 }
}
}