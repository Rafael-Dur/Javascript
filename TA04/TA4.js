function sumAll(a, b) {
    let suma = 0;
    for (let i = a; i <= b; i++) {
        suma += i;
    }
    
    console.log(`La suma de los números de ${a} a ${b} es: ${suma}`);
    
    const resultadoDiv = document.getElementById('resultado');
    
    resultadoDiv.innerHTML += `<p>La suma de los números de ${a} a ${b} es: ${suma}</p>`;
}

sumAll(1, 10);
sumAll(5, 15);
sumAll(10, 20);
