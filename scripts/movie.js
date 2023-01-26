// trae propiedades de otra pagina en este caso search del titulo de la pelicula
const queryString = window.location.search  
const url = new URLSearchParams(queryString)
const movie = url.get('title')
const apikey = "246c3696";
const movieContainer = document.querySelector(".movieContainer")
const btnFav = document.querySelector(".btnFav")

// cuando carga la pagina se recuperan los datos en localstorage de la key llamada 'arrayMovie'
// o si no sera un array vacio 
let arrayMovie =  JSON.parse(localStorage.getItem('arrayMovie')) || [] 
console.log(arrayMovie);


fetch(`http://www.omdbapi.com/?i=${movie}&apikey=${apikey}`)
    .then(response => response.json())
    .then(data => {
        const info = document.createElement("div")
        info.innerHTML = `<div>
       <img class="img" src="${data.Poster}" alt="">
       <h3>${data.Title}</h3>
       <p class="name">${data.Year}</p>
       <p class="name">${data.Director}</p>
       <p class="name">${data.Runtime}</p>
       <p class="name">${data.Plot}</p>
       </div>`
   // ingresa la info dentro del div con la clase movieContainer
        movieContainer.append(info)
        return data

    })

    
    .then(data => {
        btnFav.addEventListener("click", event => { 
  //recorre el array y encuentra la similitud del elemento contenido en el array y la data
            if (arrayMovie.some(e => e.imdbID === data.imdbID )) {   
  //si no son iguales los ingresa en el array 
            } else {
                arrayMovie.push(data)
    // guarda el array en el localstorage y convierte el valor de Javascript un string json            
                localStorage.setItem("arrayMovie", JSON.stringify(arrayMovie));
                
            }
        })
    })

    
    












    // function agregaborrar() {
    //     let element =document.querySelector("btnFav");
    //     element.classList.toggle(".movieContainer button")
    // }



























































 // AWAIT   

// const printMovie = async() => {
//     const pelicula = await fetch(`http://www.omdbapi.com/?i=${movie}&apikey=${apikey}`).then(res => res.json())
//     const info = document.createElement("div")
//         info.innerHTML = `<div>
//        <img class="img" src="${pelicula.Poster}" alt="">
//        <h3>${pelicula.Title}</h3>
//        <p class="name">${pelicula.Year}</p>
//        <p class="name">${pelicula.Director}</p>
//        <p class="name">${pelicula.Runtime}</p>
//        <p class="name">${pelicula.Plot}</p>
//        </div>`

//         movieInfo.append(info)

//         btnFav.addEventListener("click", event => {
                    
//             if (arrayMovie.find(e => e.imdbID  === data.imdbID )) {
                
//             } else {
//                 arrayMovie.push()
//                 localStorage.setItem("arrayMovie", JSON.stringify(arrayMovie));
//                 console.log(arrayMovie)
//             }
//         })
        

// }



// printMovie()




