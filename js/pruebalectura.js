/*
async function postName() {
    const object = { name: 'James Gordon' };
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(object)
    });
    const responseText = await response.text();
    console.log(responseText); // logs 'OK'
  }
  postName();
*/
 // funcion de comprobacion del estado de envio 

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
}

    function parseJSON(response) {
        return response.json()
    }
function texto(response) {
  return response.text()
}
function comprobar(response) {
  let caso =response.text();	
  console.log(caso)		;
  datos = caso.PromiseResult	;	
  console.log(datos);	
  return datos
}
    fetch('../js/prueba.json', {
        credentials: 'same-origin'
      })
    .then(checkStatus)
    .then(parseJSON)
    .then(function(data) {

      console.log('request succeeded with JSON response', data)
    }).catch(function(error) {
      console.log('request failed', error)
    })  ;  
     /*
// Procesamiento en cadena, cambiando la asincronía a una escritura de un solo hilo: uso avanzado.
fetch('../js/prueba.json').then(function(response) {
return response // ... Ejecución exitosa, paso 1 ...
}).then(function(returnedValue) {
// ... Ejecución exitosa, paso 2 ...
}).catch(function(err) {
// Hay un error en cualquier parte del medio ... resuélvalo aquí :( 
});*//*
function actualizacion(){*/
fetch('../interfaz/leer_variable_base.htm', {
credentials: 'same-origin'
})
.then(checkStatus)
.then(texto)
.then(function(result) {
console.log(result)
let datos =result.split("|")	;	;
let variables = new Array()	;				
for(i = 0; i < datos.length-1; i= i+2){				
  variable = new Map()  					
  variable.set("nombre-variable", datos[i])
  variable.set("valor", datos[i+1])
  variables.push(variable)
}
console.log(variables)
}).catch(function(error) {
console.log('request failed', error)
})  ;