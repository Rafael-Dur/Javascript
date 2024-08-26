function getSum(nums) {
    // Calcular la suma de todos los números
    const sum = nums.reduce((total, num) => total + num, 0);
    
    const resultadoTexto = `La suma de los números es: ${sum}<br>`;
    
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML += resultadoTexto;

    console.log(`La suma de los números es: ${sum}`);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostrarResultados() {
    document.getElementById("resultado").innerHTML = '';
    
    getSum(nums);
}

mostrarResultados();
