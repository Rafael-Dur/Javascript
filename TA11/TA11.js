function duplicates(nums) {

    const counts = {};
    
    // Contar las ocurrencias de cada número
    nums.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });
    
    // Contar cuántos números tienen más de una ocurrencia
    const duplicateCount = Object.values(counts).filter(count => count > 1).length;
    
    const resultadoTexto = `Cantidad de elementos repetidos: ${duplicateCount}<br>`;
    
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML += resultadoTexto;

    console.log(`Cantidad de elementos repetidos: ${duplicateCount}`);
}

const nums = [1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6];

function mostrarResultados() {
    document.getElementById("resultado").innerHTML = '';
    
    duplicates(nums);
}
mostrarResultados();
