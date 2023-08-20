const opciones = ["piedra", "papel", "tijera"];
let victoriasJugador = 0;
let victoriasPC = 0;
let intentos = 0;
let nombreJugador = "";

// Botón "Enviar"

document.getElementById("enviar").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    if (nombre.trim() !== "") {
        document.querySelector(".nombre").style.display = "none";
        document.querySelector(".botones").style.display = "flex";
        nombreJugador = nombre; // Actualizar el nombre del jugador
        actualizarMarcador(); // Llamar a la función de actualización del marcador
    } else {
        alert("Por favor, ingresa tu nombre antes de comenzar a jugar.");
    }
});

// Obligatoriedad de poner nombre y mensaje al jugar

document.querySelectorAll(".opcion").forEach(opcion => {
    opcion.addEventListener("click", () => {
        if (nombreJugador === "") {
            alert("Por favor, ingresa tu nombre antes de seleccionar una opción.");
            return;
        }
        
        const opcionJugador = opcion.id;
        const opcionPC = opciones[Math.floor(Math.random() * opciones.length)];
        
        const mensajeEleccion = `${nombreJugador} eligió: ${opcionJugador} y la computadora eligió: ${opcionPC}`;
        document.getElementById("mensaje").textContent = mensajeEleccion;
        
        const resultado = determinarGanador(opcionJugador, opcionPC);
        mostrarResultado(resultado, opcionJugador, opcionPC);
        
        if (resultado === "jugador") {
            victoriasJugador++;
        } else if (resultado === "pc") {
            victoriasPC++;
        }
        
        intentos++;
        actualizarMarcador();
        
        if (victoriasJugador === 3) {
            mostrarGanador("jugador");
        } else if (victoriasPC === 3) {
            mostrarGanador("pc");
        }
    });
});

// Función para actualizar el marcador

function actualizarMarcador() {
    document.getElementById("victoriasJugador").textContent = victoriasJugador;
    document.getElementById("victoriasPC").textContent = victoriasPC;
}

// Botón "Reiniciar"

// Función para determinar el ganador de una ronda

// Función para mostrar el resultado de una ronda

// Función para mostrar al ganador del juego