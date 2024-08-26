function removeFromArray(arreglo, item) {
    // Mostrar el arreglo original en la página web
    document.getElementById("before").innerText = "Arreglo original: " + JSON.stringify(arreglo);

    // Filtrar el arreglo para eliminar el item
    let nuevoArreglo = arreglo.filter(function(elemento) {
        return elemento !== item;
    });

    // Mostrar el arreglo resultante en la página web
    document.getElementById("after").innerText = "Arreglo después de remover '" + item + "': " + JSON.stringify(nuevoArreglo);

    // Imprimir ambos en la consola
    console.log("Arreglo original:", arreglo);
    console.log("Arreglo después de remover '" + item + "':", nuevoArreglo);
}

// Ejemplo de uso
removeFromArray([1, 2, 3, 4, 5], 3);
removeFromArray(["manzana", "naranja", "banana"], "naranja");
