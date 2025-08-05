// Lista global donde se guardan los nombres de los amigos.
let listaAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo"); // Obtenemos el campo de texto
    let nombre = input.value.trim(); // Eliminamos espacios extra

    // Validación: el campo no puede estar vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
   
    listaAmigos.push(nombre);  // Agregamos el nombre al arreglo
    actualizarLista(); // Actualizamos la lista visual
    input.value = ""; // Limpiamos el campo de entrada
}

// Función para mostrar los amigos en la lista HTML
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    
    lista.innerHTML = ""; // Limpiamos la lista anterior para evitar duplicados

    // Recorremos el arreglo de amigos y creamos un <li> por cada uno
    for (let i = 0; i < listaAmigos.length; i++) {
        let amigo = listaAmigos[i];
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
    let nombreSorteado = listaAmigos[indiceAleatorio];

    // Mostramos el nombre sorteado en la página
    resultado.innerHTML = `El amigo secreto es: ${nombreSorteado}`;
}