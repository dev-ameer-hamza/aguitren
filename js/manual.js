let tren = document.getElementById("img-tren");
let parar = document.getElementById("parar");
let atras = document.getElementById("atras");
let imgAnim;

function moverAParada(parada){
    let distancia = 0;
    let posicionDelTren = parseInt(tren.getAttribute('value'));
    posicionDeParadaSeleccionada = parseInt(parada.value);
    if(posicionDelTren < posicionDeParadaSeleccionada)
    {
        // mover a la izquierda
        distancia = posicionDeParadaSeleccionada - posicionDelTren;
        let porcentajeDeDistancia = posicionDeParadaSeleccionada * 25;
        if(posicionDeParadaSeleccionada == 4){
            porcentajeDeDistancia = 92;
        }
        let tiempoAnimacion = 2000 * distancia;
        moverDerecha(porcentajeDeDistancia,tiempoAnimacion);
        tren.setAttribute('value',parada.value);

    }
    else if(posicionDeParadaSeleccionada < posicionDelTren)
    {
        // mover a la derecha
        distancia = posicionDelTren - posicionDeParadaSeleccionada ;
        let porcentajeDeDistancia = posicionDeParadaSeleccionada * 25;
        let tiempoAnimacion = 2000 * distancia;
        moverIzquierda(porcentajeDeDistancia,tiempoAnimacion);
        tren.setAttribute('value',parada.value);
    }
}

function moverIzquierda(distancia,tiempo)
{
    actualizarArranque();
    actualizarDistancia();
    actualizarPuertas();

    console.log(distancia +" "+ tiempo);
    let posicionTren = parseInt(tren.getAttribute('value') * 25) + "%";
    let distanciaPor = distancia + "%";
    tren.animate([{left:posicionTren},{left:distanciaPor}],tiempo);
    tren.style.left = distanciaPor;
}

function moverDerecha(distancia,tiempo)
{
    actualizarArranque();
    actualizarDistancia();
    actualizarPuertas();

    console.log(distancia +" "+ tiempo);
    let posicionTren = parseInt(tren.getAttribute('value') * 25) + "%";
    let distanciaPor = distancia + "%";
    imgAnim = tren.animate([{left:posicionTren},{left:distanciaPor}],tiempo);
    tren.style.left = distanciaPor;
}


parar.addEventListener("click",function(){
    if(parar.innerText == "Parar"){
        imgAnim.pause();
        parar.innerHTML = "Reanudar";
        // actualizando la variable de emergencia

    }
    else
    {
        imgAnim.play();
        parar.innerHTML = "Parar";

    }
}),

atras.addEventListener("click",function(){

    let posicionTren = tren.getAttribute("value");

    let diferencia = posicionTren - 0;

    if(diferencia > 0)
    {
        imgAnim = tren.animate([
            {left:posicionTren * 25 + "%"},
            {left:0}
        ],diferencia * 2000);
        tren.style.left = 0;
        tren.setAttribute("value",0);

        actualizarArranque();
        actualizarDistancia();
        actualizarPuertas();
    }


});


function actualizarArranque(){}
function actualizarDistancia(){}
function actualizarPuertas(){}

function cambiarModo(){
    fetch("automatic.html",{
        method:"post",
        body:"AUTOMATIC=1&MANUAL=0"
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })
}

