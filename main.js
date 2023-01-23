
const thecast =fetch ("https://www.omdbapi.com/apikey=246c3696&type=movie&t=titanic")

     .then(response => response.json())
    .then(data =>console.log(data))
