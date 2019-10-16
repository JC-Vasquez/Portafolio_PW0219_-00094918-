
let menu_btn  = document.querySelector("nav .options");

let menu_lista = document.querySelector("nav .menu");

let hamburguesa = menu_btn.firstElementChild;

let signo = menu_btn.lastElementChild;

var estaPresente=true;

//text.innerHTML = '<a href="#intro"> introducción</a>' // Settea el contenido en formato HTML

//var div = document.getElementById("main-content")
//div.setAttribute("style","display:none")// Ocultara el elemento HTML con el id "main

signo.setAttribute("style","display:none");
hamburguesa.setAttribute("style","display:block")

menu_btn.addEventListener("click", ()=>{
        if(estaPresente){
            signo.setAttribute("style","display:block");
            hamburguesa.setAttribute("style","display:none");
            menu_lista.setAttribute("style","display:block; width:100px; height:100px");
            estaPresente=false;
        }
        else{
            signo.setAttribute("style","display:none");
            hamburguesa.setAttribute("style","display:block");
            menu_lista.setAttribute("style","display:none");
            estaPresente=true;
        }
        
})