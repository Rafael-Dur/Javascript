function validarNombre() {
    const nombre = document.getElementById('nombre').value.trim();
    const errorNombre = document.getElementById('errorNombre');

    if (nombre === '') {
        errorNombre.textContent = 'El nombre es requerido.';
        return false;
    } else {
        errorNombre.textContent = '';
        return true;
    }
}

// Función para validar la contraseña
function validarPassword() {
    const password = document.getElementById('password').value;
    const errorPassword = document.getElementById('errorPassword');

    if (password.length < 8) {
        errorPassword.textContent = 'La contraseña debe tener al menos 8 caracteres.';
        return false;
    } else {
        errorPassword.textContent = '';
        return true;
    }
}

// Función para validar el correo electrónico
function validarEmail() {
    const email = document.getElementById('email').value;
    const errorEmail = document.getElementById('errorEmail');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        errorEmail.textContent = 'El correo electrónico no es válido.';
        return false;
    } else {
        errorEmail.textContent = '';
        return true;
    }
}

// Función para validar el formulario en tiempo real
function validarFormulario() {
    const nombreValido = validarNombre();
    const passwordValido = validarPassword();
    const emailValido = validarEmail();

    return nombreValido && passwordValido && emailValido;
}

// Inicializar validaciones en tiempo real
function inicializarValidaciones() {
    document.getElementById('nombre').addEventListener('input', validarNombre);
    document.getElementById('password').addEventListener('input', validarPassword);
    document.getElementById('email').addEventListener('input', validarEmail);
    document.getElementById('formulario').addEventListener('submit', function(event) {
        if (!validarFormulario()) {
            event.preventDefault(); // Evitar el envío del formulario si hay errores
        }
    });
}

// Ejecutar validaciones cuando el documento esté listo
document.addEventListener('DOMContentLoaded', inicializarValidaciones);
