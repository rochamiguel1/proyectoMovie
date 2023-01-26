//se recupera la informacion guardada en el localstorage
let arrayMovie = JSON.parse(localStorage.getItem('arrayMovie'))
let favouriteContainer = document.querySelector(".favouriteContainer")



arrayMovie.forEach(e => {
    //se declara la variable (div) donde se pintara la pelicula favorita
    const favoritos = document.createElement("div")
    favoritos.innerHTML = `<div>
<img class="img" src="${e.Poster}" alt="">
<h3>${e.Title}</h3>
<p class="name">${e.Year}</p>
<p class="name">${e.Director}</p>
<p class="name">${e.Runtime}</p>
<p class="name">${e.Plot}</p>
<button class="btnerase">Eliminar</button>
</div>`
    //se ingresa la pelicula dentro del div que existe en el html favouriteContainer
    favouriteContainer.append(favoritos)

    let btnerase = favoritos.children[0].children[6]
    btnerase.addEventListener("click", () => {

        // El elemento seleccionado en el array se le hace un splice y la posicion indicada debe ser igual y se eliminara solo 1 elemento
        arrayMovie.splice(arrayMovie.findIndex(e => e.Title === event.target.parentNode.children[1].innerText), 1)
        localStorage.setItem('arrayMovie', JSON.stringify(arrayMovie))
        // el nuevo array con los cambios se subira al local storage con el 
        favoritos.remove()

    })
})





