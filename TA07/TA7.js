function getTheTitles(books) {

    const titles = books.map(book => book.title);
    const resultadoTexto = titles.map(title => `${title}<br>`).join('');
    
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
