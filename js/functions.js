// Mostrar un simple mensaje mediante una alerta de Javascript
function mostrarMensaje(){
    alert("Bienvenidos a mi web")
}

// Cambiamos el titulo
function cambiarTitulo(){
    const DOM = document
    let title = DOM.getElementById("title")
    title.textContent = "Javascript for dummys"
}

// Agregar parrafo
function agregarParrafo(){
    const body = document.getElementById("body")
    const parrafo = document.createElement("p")
    const texto = document.createTextNode("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?")

    parrafo.appendChild(texto)
    body.appendChild(parrafo)
}

// Validar el length del nombre
function validarNombre(){
    const nombre = document.getElementById("name").value

    if (nombre.length < 5){
        alert("El nombre no cumple con un formato valido")
    }
}
// Validar formulario
function validarFormulario(){
    const edad = document.getElementById("edad").value
    
    if (edad < 18){
        alert("Debes ser mayor de edad")
    }
}

// Cambiar parrafo
function validarMensaje(){
    const mensaje = document.getElementById("mensaje").value
    const msjValidacion = document.getElementById("mensajeValidacion")

    if (mensaje.length < 50){
       msjValidacion.textContent = "Caracteres restantes: " + (50 - mensaje.length)
    }
}