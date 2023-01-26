
const form = document.querySelector("form")
const body = document.querySelector("body")
const movieSearch = document.querySelector("#movieSearch")
const apikey = "246c3696";   



//se le aplica el evento submit al formulario
form.addEventListener("submit", event => {
  event.preventDefault() // detiene el comportamiento x defecto del navegador , cancela el submit y evita se recargue la pagina y se envie 
                
  const url = fetch(`http://www.omdbapi.com/?s=${event.target.nombrePeli.value}&apikey=${apikey}`)  // s de search e ingresar al objeto del form
    .then(response => response.json())
    .then(data => {
      
      // si existen elements(length) dentro del array moviesearch entonces no mostrara nada en el
      if (movieSearch.children.length > 0) {
        movieSearch.innerHTML = ""
      }
      // muestra la pelicula solicitada
      data.Search.forEach(e => {               //recorre cada uno de los resultados de la pelicula y agrega dentro del div (movieContainer)
        movieSearch.innerHTML += `             
                <div class="prueba">
                   <img class="imgPoster" src="${e.Poster}" alt="">
                     <div class= "preInfo">
                       <h3>${e.Title}</h3>
                       <p class="name">${e.Year}</p>
                       <a href="movie.html?title=${e.imdbID}">See</a>
                     </div>
                   </div>`

      });

    })
})
