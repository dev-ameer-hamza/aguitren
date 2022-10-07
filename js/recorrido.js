let abrirPuertas = document.getElementById("abrir-puertas");
let cerrarPuertas = document.getElementById("cerrar-puertas");

let puertaIzq = document.getElementById("puerta-izq");
let puertaDer = document.getElementById("puerta-der");

let parada1 = document.getElementsByClassName('parada1')[0];
let parada2 = document.getElementsByClassName('parada2')[0];
let parada3 = document.getElementsByClassName('parada3')[0];
let parada4 = document.getElementsByClassName('parada4')[0];
let parada5 = document.getElementsByClassName('parada5')[0];

let estado1 = document.getElementById("estado1");
let estado2 = document.getElementById("estado2");
let estado3 = document.getElementById("estado3");
let estado4 = document.getElementById("estado4");
let estado5 = document.getElementById("estado5");


let adelante = document.getElementById("adelante");
let emergencia = document.getElementById("emergencia");



puertaIzq.classList.add('abrir');
puertaDer.classList.add('abrir');

puertaIzq.style.animation = "abrirpuertas 1.5s";
puertaDer.style.animation = "abrirpuertas 1.5s";
let imgAnim;

setInterval(function(){
    fetch("automatic.html")
    .then(res => {
        console.log(res)
    })
},1000);

emergencia.addEventListener("click",function(){
    if(emergencia.innerText == "Emergencia"){
        imgAnim.pause();
        emergencia.innerHTML = "Reanudar";

        // actualizando la variable de emergencia
         fetch('automatic.html', {
             method: 'POST' ,  
             body:"PE=" + 1
         })
         .then(res => {
             console.log(res)
         })
         .catch(err => {
             console.log(err)
         })

    }
    else
    {
        imgAnim.play();
        emergencia.innerHTML = "Emergencia";

        // actualizando la variable de emergencia
         fetch('automatic.html', {
             method: 'POST' ,  
             body:"PE=" + 0
         })
         .then(res => {
             console.log(res)
         })
         .catch(err => {
             console.log(err)
         })
    }
}),

adelante.addEventListener("click",function(){
    let imgTren  = document.getElementsByClassName('img-train')[0];

    puertaIzq.classList.remove('abrir');
    puertaDer.classList.remove('abrir');

    puertaIzq.style.animation = "cerrarpuertas 1.5s";
    puertaDer.style.animation = "cerrarpuertas 1.5s";
    
     imgAnim = imgTren.animate([
        {right:'0.5vw'},
        {right:'100vw'}
    ],{
        duration:30000,
        delay:5000,
    });

    let imgStyles = window.getComputedStyle(imgTren);

    let p1Styles = window.getComputedStyle(parada1);
    let p2Styles = window.getComputedStyle(parada2);
    let p3Styles = window.getComputedStyle(parada3);
    let p4Styles = window.getComputedStyle(parada4);

     //actualizando el valor de arranque
     fetch('automatic.html', {
         method: 'POST' ,  
         body:"ARRANQUE=" + 1
     })
     .then(res => {
         console.log(res)
     })
     .catch(err => {
         console.log(err)
     })
   

    setInterval(()=>{
       
        if( (parseInt(imgStyles.getPropertyValue('left')) < (parseInt(p1Styles.getPropertyValue('left')) + 10) && parseInt(imgStyles.getPropertyValue('left')) > (parseInt(p1Styles.getPropertyValue('left')) - 10 )) && (!estado1.classList.contains("afuera-de-servicio")))
        {
            actualizaDistancia(8000);
            pauseAnim(imgAnim,parada1); 
            abrirP();
        }
        
        if( (parseInt(imgStyles.getPropertyValue('left')) < (parseInt(p2Styles.getPropertyValue('left')) + 10) && parseInt(imgStyles.getPropertyValue('left')) > (parseInt(p2Styles.getPropertyValue('left')) - 10 )) && (!estado2.classList.contains("afuera-de-servicio")) )
        {
            actualizaDistancia(6000);
            pauseAnim(imgAnim,parada2);
            abrirP();
        }
        if( (parseInt(imgStyles.getPropertyValue('left')) < (parseInt(p3Styles.getPropertyValue('left')) + 10) && parseInt(imgStyles.getPropertyValue('left')) > (parseInt(p3Styles.getPropertyValue('left')) - 10 )) && (!estado3.classList.contains("afuera-de-servicio")))
        {
            actualizaDistancia(4000);
            pauseAnim(imgAnim,parada3);
            abrirP();
        }
        if( (parseInt(imgStyles.getPropertyValue('left')) < (parseInt(p4Styles.getPropertyValue('left')) + 10) && parseInt(imgStyles.getPropertyValue('left')) > (parseInt(p4Styles.getPropertyValue('left')) - 10 )) && (!estado4.classList.contains("afuera-de-servicio")))
        {
            actualizaDistancia(2000);
            pauseAnim(imgAnim,parada4);
            abrirP();
        }
       
    },200);          

});


function pauseAnim(anim,parada)
{
    anim.pause();

    setTimeout(()=>{

        anim.play();
        cerrarP();

    },4000)
}

function abrirP()
{
    puertaIzq.classList.add('abrir');
    puertaDer.classList.add('abrir');

    puertaIzq.style.animation = "abrirpuertas 1.5s";
    puertaDer.style.animation = "abrirpuertas 1.5s";

    // abriendo puertas
     fetch('automatic.html', {
         method: 'POST' ,  
         body:"PUERTAS=" + 1
     })
     .then(res => {
         console.log(res)
     })
     .catch(err => {
         console.log(err)
     })
}

function cerrarP()
{
    puertaIzq.classList.remove('abrir');
    puertaDer.classList.remove('abrir');

    puertaIzq.style.animation = "cerrarpuertas 1.5s";
    puertaDer.style.animation = "cerrarpuertas 1.5s";

    puertaIzq.classList.add('cerrar');
    puertaDer.classList.add('cerrar');

    // cerrando puertas
     fetch('automatic.html', {
        method: 'POST' ,  
         body:"PUERTAS=" + 0
     })
     .then(res => {
         console.log(res)
     })
     .catch(err => {
         console.log(err)
     })
}



function cambiarEstado(event,parada)
{
    event.preventDefault();
   
    parada.classList.toggle("afuera-de-servicio");
    if(!parada.checked){ // enviar el pulso al servidor

        let nombreParada = "PARADA_" + parada.value;

        fetch('automatic.html', {
            method: 'POST' ,  
            body: nombreParada + "=" + parada.value
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

function actualizaDistancia(distancia)
{
    // actualizando la distanica
     fetch('automatic.html', {
         method: 'POST' ,  
         body:"DISTANCIA=" + distancia
     })
     .then(res => {
        console.log(res)
     })
     .catch(err => {
         console.log(err)
     })
}


function cambiarModo(){
    fetch("automatic.html",{
        method:"post",
        body:"AUTOMATIC=0&MANUAL=1"
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })
}