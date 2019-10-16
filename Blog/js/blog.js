let ocultar =() =>{
    document.getElementById("todo").style.display = "none";
}

let mostrar_1 =() =>{
    document.getElementById("dia_1").style.display = "block";
    document.getElementById("dia_2").style.display = "none";
    document.getElementById("dia_3").style.display = "none";
    document.getElementById("dia_4").style.display = "none";
    document.getElementById("dia_5").style.display = "none";
};

let mostrar_2 =() =>{
    document.getElementById("dia_2").style.display = "block";
    document.getElementById("dia_1").style.display = "none";
    document.getElementById("dia_3").style.display = "none";
    document.getElementById("dia_4").style.display = "none";
    document.getElementById("dia_5").style.display = "none";
};
let mostrar_3 =() =>{
    document.getElementById("dia_3").style.display = "block";
    document.getElementById("dia_2").style.display = "none";
    document.getElementById("dia_1").style.display = "none";
    document.getElementById("dia_4").style.display = "none";
    document.getElementById("dia_5").style.display = "none";
};

let mostrar_4 =() =>{
    document.getElementById("dia_4").style.display = "block";
    document.getElementById("dia_2").style.display = "none";
    document.getElementById("dia_3").style.display = "none";
    document.getElementById("dia_1").style.display = "none";
    document.getElementById("dia_5").style.display = "none";
};

let mostrar_5 =() =>{
    document.getElementById("dia_5").style.display = "block";
    document.getElementById("dia_2").style.display = "none";
    document.getElementById("dia_3").style.display = "none";
    document.getElementById("dia_4").style.display = "none";
    document.getElementById("dia_1").style.display = "none";
};





/*function mostrar() {
    document.getElementById('premio').style.display = 'block';
    document.getElementById('triste').style.display = 'none';
}

function ocultarPremio() {
    document.getElementById('premio').style.display = 'none';
    document.getElementById('triste').style.display = 'block';
}

function hola() {
    var premio  = document.getElementById("premio");

    if(premio.style.display == "none"){
        mostrarPremio();
        document.getElementById("hola").value = "ocultarPremio";
    }else{
        ocultarPremio();
        document.getElementById("hola").value = "mostrarPremio";
    }
}*/
/*
/*<script type="text/javascript">
let mostrar =() =>{
    document.getElementById("caja").style.display = "block";
};
let ocultar=() =>{
    document.getElementById("caja").style.display = "none";
};

let mostrar_ocultar =()=>{
var caja = document.getElementById("caja");

if (caja.style.display == "none"){
    mostrar();
    document.getElementById("boton").value = "ocultar";
}else{
    ocultar();
    document.getElementById("boton").value = "mostrar";
}
}
</script>
<body>
    <input type="submit" id ="boton" value="ocultar" onclick="mostrar_ocultar()"/>
    <section id= "caja" style="width: 300px;height: 200px;background: green;"></section>
*/