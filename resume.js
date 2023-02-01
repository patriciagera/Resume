

let ocultarTexto_btn = document.getElementById('ocultarTexto_btn') ;

let ocultarTexto = document.getElementById('ocultarTexto') ;

ocultarTexto_btn.addEventListener('click' , toggleText) ;

function toggleText () {
    ocultarTexto.classList.toggle('mostrar');
    if (ocultarTexto.classList.contains('mostrar')) {
        ocultarTexto_btn.innerHTML = "Leer menos" ;
    }
    else {
        ocultarTexto_btn.innerHTML = "Leer más"
    }
}

/*document.getElementById ('cambiar_color').addEventListener ('click', function() {
    document.body.style.backgroundColor = '#777373' ;
} )

document.getElementById ('cambiar-color').addEventListener ('click' , function() {
    document.body.style.backgroundColor = '#ffffff' ;
})

let cambiarColorFondo = document.getElementById('cambiar_color') ;*/

