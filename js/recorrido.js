let campoVelocidad = document.getElementById("campo-velocidad");
let abrirPuertas = document.getElementById("abrir-puertas");
let cerrarPuertas = document.getElementById("cerrar-puertas");

let puertaIzq = document.getElementById("puerta-izq");
let puertaDer = document.getElementById("puerta-der");

campoVelocidad.addEventListener("input",function(e){
    console.log("se cambia la velocidad " + e.target.value );
});


abrirPuertas.addEventListener('click',function(){
    puertaIzq.classList.add('abrir');
    puertaDer.classList.add('abrir');
    abrirPuertas.style.display = "none";
    cerrarPuertas.style.display = "block";

});

cerrarPuertas.addEventListener("click",function(e){
    puertaIzq.classList.remove('abrir');
    puertaDer.classList.remove('abrir');

    puertaIzq.classList.add('cerrar');
    puertaDer.classList.add('cerrar');

    abrirPuertas.style.display = "block";
    cerrarPuertas.style.display = "none";
});
