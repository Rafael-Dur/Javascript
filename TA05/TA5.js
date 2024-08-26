function leapYears(año) {
    // Verificar si el año es bisiesto o no
    const esBisiesto = (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
    
    const resultadoTexto = `El año ${año} ${esBisiesto ? 'es' : 'no es'} un año bisiesto.<br>`;
    
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML += resultadoTexto;

    console.log(`El año ${año} ${esBisiesto ? 'es' : 'no es'} un año bisiesto.`);
}

function mostrarResultados() {
    document.getElementById("resultado").innerHTML = '';
    
    leapYears(2024);
    leapYears(1900);
    leapYears(2000);
    leapYears(2023);
    leapYears(2040);
    leapYears(2072);
}

mostrarResultados();
