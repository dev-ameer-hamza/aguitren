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

emergencia.addEventListener("click",function(){
    imgAnim.pause();
}),

adelante.addEventListener("click",function(){
    let imgTren  = document.getElementsByClassName('img-train')[0];
    // imgTren[0].classList.add('remove-flip');
    // imgTren[0].classList.remove('flip-img');

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
    //let p5Styles = window.getComputedStyle(parada5);

   

    setInterval(()=>{
       
        if( (parseInt(imgStyles.getPropertyValue('left')) < (parseInt(p1Styles.getPropertyValue('left')) + 10) && parseInt(imgStyles.getPropertyValue('left')) > (parseInt(p1Styles.getPropertyValue('left')) - 10 )) && (!estado1.classList.contains("afuera-de-servicio")))
        {
            console.log("Paa Paaa parada 1");
            console.log(parada1.classList.contains("afuera-de-servicio"));
            pauseAnim(imgAnim,parada1); 
            abrirP();
        }
        
        if( (parseInt(imgStyles.getPropertyValue('left')) < (parseInt(p2Styles.getPropertyValue('left')) + 10) && parseInt(imgStyles.getPropertyValue('left')) > (parseInt(p2Styles.getPropertyValue('left')) - 10 )) && (!estado2.classList.contains("afuera-de-servicio")) )
        {
            console.log("Paa Paaa parada 2");
            console.log(parada2.classList.contains("afuera-de-servicio"));

            pauseAnim(imgAnim,parada2);
            abrirP();
        }
        if( (parseInt(imgStyles.getPropertyValue('left')) < (parseInt(p3Styles.getPropertyValue('left')) + 10) && parseInt(imgStyles.getPropertyValue('left')) > (parseInt(p3Styles.getPropertyValue('left')) - 10 )) && (!estado3.classList.contains("afuera-de-servicio")))
        {
            console.log("Paa Paaa parada 3");
            console.log(parada3.classList.contains("afuera-de-servicio"));

            pauseAnim(imgAnim,parada3);
            abrirP();
        }
        if( (parseInt(imgStyles.getPropertyValue('left')) < (parseInt(p4Styles.getPropertyValue('left')) + 10) && parseInt(imgStyles.getPropertyValue('left')) > (parseInt(p4Styles.getPropertyValue('left')) - 10 )) && (!estado4.classList.contains("afuera-de-servicio")))
        {
            console.log("Paa Paaa parada 4");
            console.log(parada4.classList.contains("afuera-de-servicio"));

            pauseAnim(imgAnim,parada4);
            abrirP();
        }
        /*
        if( (parseInt(imgStyles.getPropertyValue('left')) < (parseInt(p5Styles.getPropertyValue('left')) + 10) && parseInt(imgStyles.getPropertyValue('left')) > (parseInt(p5Styles.getPropertyValue('left')) - 10 )) && (!estado5.classList.contains("afuera-de-servicio")))
        {
            console.log("Paa Paaa parada 5");
            console.log(parada5.classList.contains("afuera-de-servicio"));

            pauseAnim(imgAnim,parada5);
            abrirP();
        }
        */
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



function cambiarEstado(event,parada)
{
    event.preventDefault();
   
    parada.classList.toggle("afuera-de-servicio");
    if(!parada.checked){ // enviar el pulso al servidor
        let formId = "form-parada-" + parada.value;
        let form = document.getElementById(formId);
        let nombreParada = "PARADA_" + parada.value;


        var formulario = document.createElement("form") //se genera un "formulario virtual" al cual se le añade 
	    formulario.setAttribute("id", "formVirtual")	// un input type hidden al que se le asigna valor 
	    formulario.setAttribute("method", "post")		// y se le asigna el atributo name 
	    senal =  document.createElement("input")
	    senal.setAttribute('name', nombreParada)
	    senal.setAttribute("type", "hidden")
	    senal.setAttribute("value", 0)
	    formulario.innerHTML = senal.outerHTML
        let formData = new FormData(formulario);
            const datillo =Object.fromEntries(formData.entries());
console.log(datillo);
let resultado=JSON.stringify(datillo);

        fetch('automatic.html', {
            method: 'POST' ,  
            data: resultado 
        })
        .then(res => {
            console.log(res)
        })
        .then(data => {
            console.log(data)
        })
       
        

    }
}