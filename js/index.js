// 1) leer el array de objetos para poder pintarlo



//pintar html
function generarInterfaz(){
    let contenedor = document.querySelector(".galeria");
    if(tf.length > 0){
        for (const elemento of tf) {
        contenedor.innerHTML += `
        
        <div class="card">
        <section class="contenedor1">
        <img class="poster" src="${elemento.poster}" alt="" id=${elemento.id} title="${elemento.titulo}">
        <div class="contenedor-texto">
        <p class="text-amarillo" >TÍTULO: </p> 
        <p class="text-white" >${elemento.titulo}</p>
        </div>
        <div class="contenedor-texto">
        <p class="text-amarillo" >CATEGORÍA: </p> 
        <p class="text-white" >${elemento.categoria}</p>
        </div>
        </section>
        </div>
        `
    }
    

} else{
    contenedor.innerHTML = `<p class="error-contenido">Error al cargar la información</p>`
}
    
}

generarInterfaz()

/* Agregar el evento click */

function direccionar(){
    let peliculas = document.querySelectorAll(".poster");
    for (const pelicula of peliculas) {
        pelicula.addEventListener("click",(evento)=>{
            console.log("click", evento.target.id);
            let idElemento = evento.target.id;
            
            let busqueda = tf.find(elemento => elemento.id == idElemento);
            localStorage.setItem("pelicula",JSON.stringify(busqueda))
            window.location ="./details.html"
            console.log(busqueda);
        })
        
    }
    
}

direccionar()


