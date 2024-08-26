function removeFromArray(arreglo, item) {
    document.getElementById("before").innerText = "Arreglo original: " + JSON.stringify(arreglo);

    // Filtrar el arreglo para eliminar el item
    let nuevoArreglo = arreglo.filter(function(elemento) {
        return elemento !== item;
    });

    document.getElementById("after").innerText = "Arreglo después de remover '" + item + "': " + JSON.stringify(nuevoArreglo);

    console.log("Arreglo original:", arreglo);
    console.log("Arreglo después de remover '" + item + "':", nuevoArreglo);
}

// Ejemplo de uso
removeFromArray([1, 2, 3, 4, 5], 3);
removeFromArray(["manzana", "naranja", "banana"], "naranja");
