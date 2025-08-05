// Lista para guardar los nombres ingresados
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Elimina espacios al inicio y final

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    listaAmigos.push(nombre); // Agrega el nombre a la lista
    mostrarLista(); // Muestra la lista actualizada
    input.value = ""; // Limpia el campo de entrada
}

// Función para mostrar la lista en pantalla
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpia la lista actual

    listaAmigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpia resultados anteriores

    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const nombreSorteado = listaAmigos[indiceAleatorio];

    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${nombreSorteado}`;
    resultado.appendChild(li);
}

