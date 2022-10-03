
console.log("inicial js")

if(document.getElementById("enviarcontacto")){
    document.getElementById("enviarcontacto"). addEventListener("click",enviarcontac);
}
if(document.getElementById("sesion")){
    document.getElementById("sesion"). addEventListener("click",iniciosession);
}

function enviarcontac(){
        let nombre=document.getElementById('nombre').value;
        let correo=document.getElementById('correo').value;
        let asunto=document.getElementById('asunto').value;
        let descripcion=document.getElementById('descripcion').value;
        let regNombre=new RegExp("^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$")
        console.log(nombre.length)
        if(nombre.length==0 || correo.length==0 || asunto.length==0 || descripcion.length==0 ){
            swal("No se puede dejar ningun campo vacio", {icon: "info",})
        }
        else{
            
            if (!regNombre.test(correo)){
                swal("El apartado de correo electronico no tiene la estructura de un correo", {icon: "info",})
            }
            else{
                swal({
                    title: "Estas seguro?",
                    text: "Una vez que le des a 'Si' se enviará", 
                    icon: "warning",
                    buttons: true,
                    confirmButtonText: 'Si!',
                    cancelButtonText: 'No!',
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                    swal("Se ha enviado correctamente", {
                        icon: "success",
                    });
                    } 
                });
            }
        }
     
}

function iniciosession() {
    let nombre=document.getElementById ("user").value;
    regNombre=new RegExp("^admin$") 
    let passwd=document.getElementById ('passwd').value;
    regPasswd=new RegExp("^12345$")
    if (regNombre.test(nombre) && regPasswd.test(passwd)) 
    {
    
       window.location="../index.html";
       window.sessionStorage.setItem("user", "admin")
    }
    else 
        swal("Usuario o contraseña no validos", {icon: "error",timer: 5000,buttons: false})
}
