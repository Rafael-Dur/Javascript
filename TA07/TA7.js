function getTheTitles(books) {
    // Obtener solo los títulos de los libros usando map
    const titles = books.map(book => book.title);
    
    const resultadoTexto = `Títulos de los libros: ${titles.join(', ')}<br>`;
    
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML += resultadoTexto;

    console.log(titles);
}

const books = [
    { title: 'El Señor de los Anillos', author: 'J.R.R. Tolkien' },
    { title: 'Danza con Lobos', author: 'Michael Blake' },
    { title: 'Los Viajes de Gulliver', author: 'Jonathan Swift'},
    { title: 'Moby Dick', author: 'Herman Melville' },
    { title: 'El Náufrago', author: 'Daniel Defoe' }

];

function mostrarResultados() {
    // Limpiar resultados anteriores
    document.getElementById("resultado").innerHTML = '';
    
    getTheTitles(books);
}

mostrarResultados();
