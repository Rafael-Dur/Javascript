function getOdds(nums) {
    // Filtrar los números impares
    const odds = nums.filter(num => num % 2 !== 0);
    
    const resultadoTexto = `Números impares: ${odds.join(', ')}<br>`;
    
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML += resultadoTexto;

    console.log(`Números impares: ${odds}`);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostrarResultados() {
    document.getElementById("resultado").innerHTML = '';
    
    getOdds(nums);
}

mostrarResultados();
