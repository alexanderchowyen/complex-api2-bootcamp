console.log('Where the popcorn at folks')
const button = document.querySelector('button')
const display = document.querySelector('#display')
const movies = document.querySelector('ul')
const input = document.querySelector('input')

button.addEventListener('click',function(){
  let query = [...input.value].map(letter=>letter===' '?"+":letter).join(''); 
   let url = `http://www.omdbapi.com/?t=${query}&apikey=29226b37`
   let header = new Headers();
   header.set("mode",'no-cors')
   header.set('Access-Control-Allow-Origin','*')
   let movies

   fetch(url, header)
   .then(res=>res.json())
   .then(async data=> {
    movies = await data
   })
   
   setTimeout(function(){
    console.table(movies)
     let url = "https://api.amctheatres.com/v2/movies/views/all/active?name=batman"
     fetch(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=batman`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "86c2a2b73fmsh4979c442e058ea4p11e259jsn001bdd43da9c",
            'Access-Control-Allow-Origin':'*',
            "mode":'no-cors'
          }})
     .then(res=>res.json())
     .then(data=>{
      console.table(data)
     })
   },400)
})

///v2/movies/views/all/active
//https://api.amctheatres.com/v2/movies/views/all/active



