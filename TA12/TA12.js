function generatePassword(length) {
    // Asegurarse de que la longitud mínima sea 8
    if (length < 8) {
        length = 8;
    }

    // Definir los caracteres disponibles para la contraseña
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    // Combinar todos los caracteres disponibles
    const allChars = upperCaseChars + lowerCaseChars + numbers + specialChars;
    
    // Generar una contraseña aleatoria
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    
    const resultadoTexto = `Contraseña generada: ${password}<br>`;
    
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML += resultadoTexto;

    console.log(`Contraseña generada: ${password}`);
}

function mostrarResultados() {
    document.getElementById("resultado").innerHTML = '';
    
    generatePassword(8);
    generatePassword(12);
}
mostrarResultados();
