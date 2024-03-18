
/*No se aceptan muyusculas ni caracteres especiales
para realizar la copia hay que buscar en el portapapeles de la Api */
//con la funcion .trim() elimino los espacios en blanco tanto al comienzo como al final

/*document.querySelector("h1") traigo el valor que figura en el html , si pongo una variable lo guardo en esa variable   */

function asignaTitulo(elemento, texto){
    let elementoHtml= document.querySelector(elemento);
    elementoHtml.innerHTML= texto;
    return;
}
asignaTitulo("h1","Bienvenidos al Encriptador!!");/*El elementoHTML= h1 y el texto es lo que quiero poner */
//Creo las variables y tomo las referencias del HTML con GetElementById o QuerySelectro
let textArea= document.getElementById("area");
let valorInput= document.querySelector("#textoUsuario");
let botonEncriptar= document.getElementById("encriptar");
let botonDesencriptar= document.querySelector("#desencriptar");
let botonCopiar= document.getElementById("copiar");
let botonReset= document.querySelector("#reset");
let video=document.getElementById("videoFondo");

video.style.display = "none";//Pongo para que no aparezca el video, sino me aparecia al principio

//Creo la funcion encriptar el cual recibe como parametro la cadena
function encriptar(cadena) {
        // Reemplazar las letras según las reglas de encriptación
        let encriptada = cadena.replace(/e/g, 'enter')//replace reemplaz parte de la cadena que selecciono por otra
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');
        encriptada=encriptada.toLowerCase();
        textArea.value=encriptada;//Muestro el resultado en el textarea
        return encriptada;
}
//Creo la funcion desencriptar
function desencriptar(otraCadena) {
    // Reemplazar las letras encriptadas por las originales
    let desencriptada = otraCadena.replace(/enter/g, 'e')
     
                              .replace(/imes/g, 'i')
                              .replace(/ai/g, 'a')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u');
    desencriptada=desencriptada.toLowerCase();
    textArea.value=desencriptada;

    return desencriptada;
}



//Creo eventos. Cuando el usuario hace Clic en el boton, se ejecuta la funcion
botonEncriptar.addEventListener("click", function(){//Creo la funcion cuando apreto el boton cambia el valor del subtitulo    
    if (valorInput.value.trim() !== "") {//Valido que no haya espacion ni antes ni despues con trim() ej borra: .....gtao.... y me aseguro que no este vacio
        textArea.value = encriptar(valorInput.value);
        cargarVideo();
       
    } else {
        alert("Ingrese un texto antes de encriptar.");
    }
    
    return ;

})
botonDesencriptar.addEventListener("click", function(){
    if (valorInput.value.trim() !== "") {
        textArea.value = desencriptar(valorInput.value);
        cargarVideo();
    } else {
        alert("Ingrese un texto antes de desencriptar.");
    }
    return ;

})

// Hago el reset
botonReset.addEventListener("click", function(){    
    textArea.value="";
    valorInput.value=""; 
})

//BOTON DE COPIAR
botonCopiar.addEventListener("click", function(){  
    // Obtener referencia al textarea
    let textArea = document.getElementById("area");
    
    // Verificar si el textarea está vacío
    if (textArea.value.trim() === "") {
        // Mostrar un mensaje de alerta si está vacío
        alert("No hay contenido para copiar.");
    } else {
        // Si no está vacío, seleccionar y copiar el contenido al portapapeles
        textArea.select();
        document.execCommand('copy');
        
        // Desseleccionar el texto para que no quede resaltado
        window.getSelection().removeAllRanges();
        
        // Mostrar mensaje de éxito (opcional)
        alert('¡El contenido ha sido copiado!');
    }
});


// Función para cargar y reproducir el video

function cargarVideo() {
    console.log("Cargando y reproduciendo el video...");
    video.style.display = "block"; // Mostrar el video
    video.play();
    // Detener el video después de 800 milisegundos (800 milisegundos)
    setTimeout(function() {
        console.log("Deteniendo el video...");
        video.pause();
        video.style.display = "none"; // Ocultar el video
    }, 800);
}
