function convertToCelsius(tempFahrenheit) {
    // Convertir Fahrenheit a Celsius
    const tempCelsius = (tempFahrenheit - 32) * 5 / 9;
    
    // Redondear a un decimal
    const tempCelsiusRounded = Math.round(tempCelsius * 10) / 10;
    
    const resultadoTexto = `Temperatura: ${tempFahrenheit}°F = ${tempCelsiusRounded}°C<br>`;
    
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML += resultadoTexto;

    console.log(`Temperatura: ${tempFahrenheit}°F = ${tempCelsiusRounded}°C`);
}

function convertToFahrenheit(tempCelsius) {
    // Convertir Celsius a Fahrenheit
    const tempFahrenheit = (tempCelsius * 9 / 5) + 32;
    
    // Redondear a un decimal
    const tempFahrenheitRounded = Math.round(tempFahrenheit * 10) / 10;
    
    const resultadoTexto = `Temperatura: ${tempCelsius}°C = ${tempFahrenheitRounded}°F<br>`;
    
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML += resultadoTexto;

    console.log(`Temperatura: ${tempCelsius}°C = ${tempFahrenheitRounded}°F`);
}

function mostrarResultados() {
    // Limpiar resultados anteriores
    document.getElementById("resultado").innerHTML = '';
    
    convertToCelsius(100);  // 100°F a °C
    convertToCelsius(32);   // 32°F a °C
    convertToFahrenheit(0); // 0°C a °F
    convertToFahrenheit(37.8); // 37.8°C a °F
}

mostrarResultados();
