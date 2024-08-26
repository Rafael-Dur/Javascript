const personas = [
    'Juan Pérez',
    'Ana Martínez',
    'Luis García',
    'Marta Fernández',
    'Carlos López',
    'Laura Sánchez'
];

// Renderiza la lista de personas en el HTML
function renderizarLista() {
    const lista = document.getElementById('lista');
    lista.innerHTML = '';

    personas.forEach(persona => {
        const li = document.createElement('li');
        li.textContent = persona;
        lista.appendChild(li);
    });
}

// Filtra los elementos de la lista basándose en el texto del input
function filtrarLista() {
    const busqueda = document.getElementById('busqueda').value.toLowerCase();
    const items = document.querySelectorAll('#lista li');

    items.forEach(item => {
        const texto = item.textContent.toLowerCase();
        if (texto.includes(busqueda)) {
            item.style.display = 'list-item';
        } else {
            item.style.display = 'none';
        }
    });
}

function inicializar() {
    renderizarLista();
    document.getElementById('busqueda').addEventListener('input', filtrarLista);
}

document.addEventListener('DOMContentLoaded', inicializar);
