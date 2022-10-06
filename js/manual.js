let tren = document.getElementById("img-tren");

function moverAParada(parada){
    let distancia = 0;
    let posicionDelTren = parseInt(tren.getAttribute('value'));
    posicionDeParadaSeleccionada = parseInt(parada.value);
console.log("posicion " + posicionDelTren +" "+posicionDeParadaSeleccionada);
    if(posicionDelTren < posicionDeParadaSeleccionada)
    {
        // mover a la izquierda
        distancia = posicionDeParadaSeleccionada - posicionDelTren;
        let porcentajeDeDistancia = posicionDeParadaSeleccionada * 25;
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
    console.log(distancia +" "+ tiempo);
    let posicionTren = parseInt(tren.getAttribute('value') * 25) + "%";
    let distanciaPor = distancia + "%";
    tren.animate([{left:posicionTren},{left:distanciaPor}],tiempo);
    tren.style.left = distanciaPor;
}

function moverDerecha(distancia,tiempo)
{
    console.log(distancia +" "+ tiempo);
    let posicionTren = parseInt(tren.getAttribute('value') * 25) + "%";
    let distanciaPor = distancia + "%";
    tren.animate([{left:posicionTren},{left:distanciaPor}],tiempo);
    tren.style.left = distanciaPor;
}