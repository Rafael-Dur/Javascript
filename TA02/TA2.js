function reverseString(texto) {
    let textoInvertido = texto.split('').reverse().join('');
    
    // Mostrar el resultado en la página web
    document.getElementById("output").innerText = textoInvertido;
    
    console.log(textoInvertido);
}

reverseString("Hola, Rafael");
