let campoVelocidad = document.getElementById("campo-velocidad");
let abrirPuertas = document.getElementById("abrir-puertas");
let cerrarPuertas = document.getElementById("cerrar-puertas");

let puertaIzq = document.getElementById("puerta-izq");
let puertaDer = document.getElementById("puerta-der");

let parada1 = document.getElementsByClassName('parada1')[0];
let parada2 = document.getElementsByClassName('parada2')[0];
let parada3 = document.getElementsByClassName('parada3')[0];
let parada4 = document.getElementsByClassName('parada4')[0];
let parada5 = document.getElementsByClassName('parada5')[0];

let parar = document.getElementById("parar");
let adelante = document.getElementById("adelante");
let atras = document.getElementById("atras");



puertaIzq.classList.add('abrir');
puertaDer.classList.add('abrir');

puertaIzq.style.animation = "abrirpuertas 1.5s";
puertaDer.style.animation = "abrirpuertas 1.5s";

adelante.addEventListener("click",function(){
    let imgTren  = document.getElementsByClassName('img-train')[0];
    // imgTren[0].classList.add('remove-flip');
    // imgTren[0].classList.remove('flip-img');

    puertaIzq.classList.remove('abrir');
    puertaDer.classList.remove('abrir');

    puertaIzq.style.animation = "cerrarpuertas 1.5s";
    puertaDer.style.animation = "cerrarpuertas 1.5s";
    
    let imgAnim = imgTren.animate([
        {right:'0.5vw'},
        {right:'100vw'}
    ],{
        duration:22000,
        delay:4000
    });

    let imgStyles = window.getComputedStyle(imgTren);

    let p1Styles = window.getComputedStyle(parada1);
    let p2Styles = window.getComputedStyle(parada2);
    let p3Styles = window.getComputedStyle(parada3);
    let p4Styles = window.getComputedStyle(parada4);
    let p5Styles = window.getComputedStyle(parada5);

   

    setInterval(()=>{
       
        if( parseInt(imgStyles.getPropertyValue('left')) < (parseInt(p1Styles.getPropertyValue('left')) + 10) && parseInt(imgStyles.getPropertyValue('left')) > (parseInt(p1Styles.getPropertyValue('left')) - 10 ))
        {
            console.log("Paa Paaa parada 1");
            let detalle = document.getElementsByClassName('d1')[0]; 
            pauseAnim(imgAnim,detalle,parada1); 
            abrirP();
        }
        if( parseInt(imgStyles.getPropertyValue('left')) < (parseInt(p2Styles.getPropertyValue('left')) + 10) && parseInt(imgStyles.getPropertyValue('left')) > (parseInt(p2Styles.getPropertyValue('left')) - 10 ))
        {
            console.log("Paa Paaa parada 2");
            let detalle = document.getElementsByClassName('d2')[0];
            pauseAnim(imgAnim,detalle,parada2);
            abrirP();
        }
        if( parseInt(imgStyles.getPropertyValue('left')) < (parseInt(p3Styles.getPropertyValue('left')) + 10) && parseInt(imgStyles.getPropertyValue('left')) > (parseInt(p3Styles.getPropertyValue('left')) - 10 ))
        {
            console.log("Paa Paaa parada 3");
            let detalle = document.getElementsByClassName('d3')[0];
            pauseAnim(imgAnim,detalle,parada3);
            abrirP();
        }
        if( parseInt(imgStyles.getPropertyValue('left')) < (parseInt(p4Styles.getPropertyValue('left')) + 10) && parseInt(imgStyles.getPropertyValue('left')) > (parseInt(p4Styles.getPropertyValue('left')) - 10 ))
        {
            console.log("Paa Paaa parada 4");
            let detalle = document.getElementsByClassName('d4')[0];
            pauseAnim(imgAnim,detalle,parada4);
            abrirP();
        }
        if( parseInt(imgStyles.getPropertyValue('left')) < (parseInt(p5Styles.getPropertyValue('left')) + 10) && parseInt(imgStyles.getPropertyValue('left')) > (parseInt(p5Styles.getPropertyValue('left')) - 10 ))
        {
            console.log("Paa Paaa parada 5");
            let detalle = document.getElementsByClassName('d5')[0];
            pauseAnim(imgAnim,detalle,parada5);
            abrirP();
        }
    },200);          

});


function pauseAnim(anim,detalle,parada)
{
    anim.pause();
    detalle.classList.add('mostrar-detalle');
    parada.style.backgroundColor = "orange";

    setTimeout(()=>{

        anim.play();
        detalle.classList.remove('mostrar-detalle');
        parada.style.backgroundColor = "green";
        cerrarP();

    },4000)
}

function abrirP()
{
    puertaIzq.classList.add('abrir');
    puertaDer.classList.add('abrir');

    puertaIzq.style.animation = "abrirpuertas 1.5s";
    puertaDer.style.animation = "abrirpuertas 1.5s";
}

function cerrarP()
{
    puertaIzq.classList.remove('abrir');
    puertaDer.classList.remove('abrir');

    puertaIzq.style.animation = "cerrarpuertas 1.5s";
    puertaDer.style.animation = "cerrarpuertas 1.5s";

    puertaIzq.classList.add('cerrar');
    puertaDer.classList.add('cerrar');
}
// atras.addEventListener("click",function(){
//     let imgTren  = document.getElementsByClassName('img-train');
//     let styles = window.getComputedStyle(imgTren[0]);

//     let rightPos = styles.getPropertyValue('right');

//     console.log(" left " + rightPos);

//     let rightVW = parseInt(rightPos) * (100 / document.documentElement.clientWidth);

//     // alert(imgTren[0].style.right);
//     imgTren[0].classList.add('flip-img');
//     imgTren[0].classList.remove('remove-flip');

//     imgTren[0].classList.add('remove-animation');
//     // imgTren[0].style.animation = "rideatras 10s linear 1s infinite";
    
//     puertaIzq.classList.remove('abrir');
//     puertaDer.classList.remove('abrir');

//     puertaIzq.style.animation = "cerrarpuertas 3s";
//     puertaDer.style.animation = "cerrarpuertas 3s";

//     imgTren[0].animate([{
//         right: rightVW + 'vw'
//     },
//     {
//         right: '-5vw'
//     }]
//     ,7000);
// });
