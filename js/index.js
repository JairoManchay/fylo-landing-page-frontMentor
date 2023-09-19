/* primero obtener el correo  */
const input_correo = document.getElementById('primer_input');
const boton_confirm= document.getElementById('start_1');

const input_correo_2 = document.getElementById('correo_2');
const boton_confirm_2= document.getElementById('boton_2');


// texto 
const enlace = document.getElementById('enlace_informativo');


// CODIGO REGEX, PARA VALIDAR CORREO
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

// Eventos con los botones e inputs
boton_confirm.addEventListener('click', function(){
    validarCorreo(input_correo);
})

boton_confirm_2.addEventListener('click', function(){
    validarCorreo(input_correo_2);
})

// enlace.addEventListener('mousemove', function(){
//     createAlert('Test Link', 'Validates the click event and by hovering only the mouse', 'info');
    
// })


enlace.addEventListener('click', function(){
    createAlert('Test Link', 'Validates the click event', 'info');
    
})



function validarCorreo(correo){
    let valorCorreo = correo.value;
    let validando = emailRegex.test(valorCorreo);
    let validar_espacio = correo.value.trim();

    console.log(validando);
    if(validar_espacio != '' && validando){
        createAlert('Email received','You email have been sent!','success');
        correo.value = '';
        correo.style.borderColor='green';
    }else if(validar_espacio == ''){

        createAlert('Place your email','Writte your email, please','info');
        correo.style.borderColor='yellow';

    }else if(!validando){
        createAlert('Invalid Email','Your email is not valid','error');
        correo.style.borderColor='red';
    }
}

// Extension: Template String
function createAlert(titulo, parrafo, icon){
    Swal.fire({
        title: `<h1 id="Cabecera_alert">${titulo}</h1>`,
        html:  `<p id="para_alert">${parrafo}</p>`,
        icon:  `${icon}`,
        confirmButtonText: 'OK',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
        }

    })
}