
export async function getPosts() {
try {
    const res = await fetch('https://www.reddit.com/r/Futurology.json');
    const data = await res.json();
    let d = []
    data.data.children.map(p => {
     (p.data.link_flair_text != 'meta')
       ? d.push(p)
       : console.log('no es meta');
    })
    return d;
}catch (error) {
    console.log(error);
}

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