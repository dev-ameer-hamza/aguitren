let campoVelocidad = document.getElementById("campo-velocidad");
let abrirPuertas = document.getElementById("abrir-puertas");
let cerrarPuertas = document.getElementById("cerrar-puertas");

let puertaIzq = document.getElementById("puerta-izq");
let puertaDer = document.getElementById("puerta-der");

let parada2 = document.getElementsByClassName('parada2')[0];
let parada1 = document.getElementsByClassName('parada1')[0];

let parar = document.getElementById("parar");
let adelante = document.getElementById("adelante");
let atras = document.getElementById("atras");

// campoVelocidad.addEventListener("input",function(e){
//     console.log("se cambia la velocidad " + e.target.value );
// });




parar.addEventListener("click",function(){
    let imgTren  = document.getElementsByClassName('img-train');

    puertaIzq.classList.add('abrir');
    puertaDer.classList.add('abrir');

    puertaIzq.style.animation = "abrirpuertas 1.5s";
    puertaDer.style.animation = "abrirpuertas 1.5s";

    console.log(imgTren[0].getBoundingClientRect());
    imgTren[0].style.animationPlayState = "paused";
});

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
        {right:'3vw'},
        {right:'100vw'}
    ],14000);

    let imgStyles = window.getComputedStyle(imgTren);
    let p1Styles = window.getComputedStyle(parada1);
    let p2Styles = window.getComputedStyle(parada2);

    console.log(imgStyles.getPropertyValue('left'));
    console.log(p2Styles);
    console.log(p1Styles);

    setInterval(()=>{
        // console.log(p2Styles.getPropertyValue('left') === imgStyles.getPropertyValue('left'));
        console.log(parseInt(imgStyles.getPropertyValue('left')));
        // console.log(p2Styles.getPropertyValue('left'));
        if( parseInt(imgStyles.getPropertyValue('left')) < (parseInt(p2Styles.getPropertyValue('left')) + 25) && parseInt(imgStyles.getPropertyValue('left')) > (parseInt(p2Styles.getPropertyValue('left')) - 25 ))
        {
            console.log("Llegado a parada 2");
            imgAnim.pause();
        }
    
        if( parseInt(imgStyles.getPropertyValue('left')) < (parseInt(p1Styles.getPropertyValue('left')) + 25) && parseInt(imgStyles.getPropertyValue('left')) > (parseInt(p1Styles.getPropertyValue('left')) - 25 ))
        {
            console.log("Llegado a parada 1");
        }
    },200);



    // setInterval(()=>{
    //     imgAnim.pause();
        
    //     puertaIzq.classList.add('abrir');
    //     puertaDer.classList.add('abrir');
    
    //     puertaIzq.style.animation = "abrirpuertas 1.5s";
    //     puertaDer.style.animation = "abrirpuertas 1.5s";
    //     // setTimeout(()=>{
        
           
    //     // },4000)

    // },6250);

            // imgAnim.play();
            // puertaIzq.classList.remove('abrir');
            // puertaDer.classList.remove('abrir');

            // puertaIzq.style.animation = "cerrarpuertas 1.5s";
            // puertaDer.style.animation = "cerrarpuertas 1.5s";

            // puertaIzq.classList.add('cerrar');
            // puertaDer.classList.add('cerrar');

});

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
