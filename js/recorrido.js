let campoVelocidad = document.getElementById("campo-velocidad");
let abrirPuertas = document.getElementById("abrir-puertas");
let cerrarPuertas = document.getElementById("cerrar-puertas");

let puertaIzq = document.getElementById("puerta-izq");
let puertaDer = document.getElementById("puerta-der");

let parar = document.getElementById("parar");
let adelante = document.getElementById("adelante");
let atras = document.getElementById("atras");

campoVelocidad.addEventListener("input",function(e){
    console.log("se cambia la velocidad " + e.target.value );
});




parar.addEventListener("click",function(){
    let imgTren  = document.getElementsByClassName('img-train');

    puertaIzq.classList.add('abrir');
    puertaDer.classList.add('abrir');

    puertaIzq.style.animation = "abrirpuertas 3s";
    puertaDer.style.animation = "abrirpuertas 3s";

    console.log(imgTren[0].getBoundingClientRect());
    imgTren[0].style.animationPlayState = "paused";
});


adelante.addEventListener("click",function(){
    let imgTren  = document.getElementsByClassName('img-train');
    imgTren[0].classList.add('remove-flip');
    imgTren[0].classList.remove('flip-img');

    puertaIzq.classList.remove('abrir');
    puertaDer.classList.remove('abrir');

    puertaIzq.style.animation = "cerrarpuertas 3s";
    puertaDer.style.animation = "cerrarpuertas 3s";

    puertaIzq.classList.add('cerrar');
    puertaDer.classList.add('cerrar');

    imgTren[0].style.animationPlayState = "running";
});

atras.addEventListener("click",function(){
    let imgTren  = document.getElementsByClassName('img-train');
    // alert(imgTren[0].style.right);
    imgTren[0].classList.add('flip-img');
    imgTren[0].classList.remove('remove-flip');

    // imgTren[0].classList.add('remove-animation');
    imgTren[0].style.animation = "rideatras 10s linear 1s infinite";
    puertaIzq.classList.remove('abrir');
    puertaDer.classList.remove('abrir');

    puertaIzq.style.animation = "cerrarpuertas 3s";
    puertaDer.style.animation = "cerrarpuertas 3s";
});
