// Declaramos la lista global donde se guardarán los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo"); // Obtenemos el campo de texto
    let nombre = input.value.trim(); // Eliminamos espacios extra

    // Validación: el campo no puede estar vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregamos el nombre al arreglo
    amigos.push(nombre);

    // Actualizamos la lista visual
    actualizarLista();

    // Limpiamos el campo de entrada
    input.value = "";
}

// Función para mostrar los amigos en la lista HTML
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");

    // Limpiamos la lista anterior para evitar duplicados
    lista.innerHTML = "";

    // Recorremos el arreglo de amigos y creamos un <li> por cada uno
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiamos resultados anteriores

    // Validación: debe haber al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generamos un índice aleatorio entre 0 y la longitud del arreglo
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indiceAleatorio];

    // Mostramos el nombre sorteado en la página
    resultado.innerHTML = `<li>El amigo secreto es: ${nombreSorteado}</li>`;
}