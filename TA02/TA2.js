function reverseString(texto) {
    let textoInvertido = texto.split('').reverse().join('');
    
    // Mostrar el resultado en la página web
    document.getElementById("output").innerText = textoInvertido;
    
    // Imprimir el resultado en la consola
    console.log(textoInvertido);
}

reverseString("Hola, Rafael");
