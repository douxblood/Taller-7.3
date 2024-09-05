document.getElementById('regBtn').addEventListener('click', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const terminos = document.getElementById('terminos').checked;

    // Inicializar un array para almacenar los mensajes de error
    let errores = [];

    // Validaciones
    if (!nombre || !apellido || !email || !password1 || !password2 || !terminos) {
        errores.push("Ningún campo puede estar vacío.");
    }

    if (password1.length < 6) {
        errores.push("La contraseña debe tener al menos 6 caracteres.");
    }

    if (password1 !== password2){
        errores.push("Las contraseñas no coinciden.");
    }

    // Mostrar mensajes de error o éxito
    if (errores.length > 0) {
        showAlertError(errores.join('<br>'));
    } else {
        showAlertSuccess();
    }

});

function showAlertSuccess() {
    const alertSuccess = document.getElementById("alert-success");
    alertSuccess.classList.add("show");
    setTimeout(() => alertSuccess.classList.remove("show"), 3000); // Oculta el mensaje después de 3 segundos
}

function showAlertError(message) {
    const alertDanger = document.getElementById("alert-danger");
    alertDanger.querySelector('p').innerHTML = message; // Establece el mensaje de error
    alertDanger.classList.add("show");
    setTimeout(() => alertDanger.classList.remove("show"), 5000); // Oculta el mensaje después de 5 segundos
}