function leapYears(año) {
    // Verificar si el año es bisiesto
    const esBisiesto = (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
    
    // Generar el texto para mostrar
    const resultadoTexto = `El año ${año} ${esBisiesto ? 'es' : 'no es'} un año bisiesto.<br>`;
    
    // Mostrar el resultado en la página web sin sobrescribir los anteriores
    document.getElementById("resultado").innerHTML += resultadoTexto;

    // Imprimir el resultado en la consola (opcional)
    console.log(`El año ${año} ${esBisiesto ? 'es' : 'no es'} un año bisiesto.`);
}

// Ejemplos de uso
leapYears(2024); // Muestra en la página web y en la consola
leapYears(1900); // Muestra en la página web y en la consola
leapYears(2000); // Muestra en la página web y en la consola
leapYears(2023); // Muestra en la página web y en la consola
