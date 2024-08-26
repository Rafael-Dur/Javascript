function findTheOldest(people) {
    // Obtener la fecha actual
    const currentYear = new Date().getFullYear();

    // Encontrar la persona más anciana
    const oldestPerson = people.reduce((oldest, person) => {
        // Calcular la edad de la persona
        const yearOfDeath = person.yearOfDeath || currentYear; // Si no falleció, usar el año actual
        const age = yearOfDeath - person.yearOfBirth;
        
        // Comparar con la edad del anciano actual
        if (!oldest || age > oldest.age) {
            return { ...person, age };
        }
        return oldest;
    }, null);

    const resultadoTexto = `La persona más anciana es ${oldestPerson.name}, con ${oldestPerson.age} años.<br>`;
    
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML += resultadoTexto;

    console.log(`La persona más anciana es ${oldestPerson.name}, con ${oldestPerson.age} años.`);
}

const people = [
    { name: "Carly", yearOfBirth: 1942, yearOfDeath: 2020 },
    { name: "Ray", yearOfBirth: 1962, yearOfDeath: 2021 },
    { name: "Jane", yearOfBirth: 1912, yearOfDeath: 1983 }
];

function mostrarResultados() {
    document.getElementById("resultado").innerHTML = '';
    
    findTheOldest(people);
}

mostrarResultados();
