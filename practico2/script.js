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

document.getElementById("reiniciar").addEventListener("click", () => {
    victoriasJugador = 0;
    victoriasPC = 0;
    intentos = 0;
    document.querySelector(".nombre").style.display = "block";
    document.querySelector(".botones").style.display = "flex";
    document.querySelector(".resultado").style.display = "none";
    document.getElementById("mensaje").textContent = "";
    actualizarMarcador();
    document.querySelectorAll(".opcion").forEach(opcion => {
        opcion.disabled = false;
    });
});

// Función para determinar el ganador de una ronda

function determinarGanador(opcionJugador, opcionPC) {
    if (opcionJugador === opcionPC) {
        return "empate";
    } else if ((opcionJugador === "piedra" && opcionPC === "tijera") ||
               (opcionJugador === "papel" && opcionPC === "piedra") ||
               (opcionJugador === "tijera" && opcionPC === "papel")) {
        return "jugador";
    } else {
        return "pc";
    }
}

// Función para mostrar el resultado de una ronda

function mostrarResultado(resultado, opcionJugador, opcionPC) {
    const resultadoTexto = document.getElementById("resultadoTexto");
    if (resultado === "empate") {
        resultadoTexto.textContent = "Empate";
    } else if (resultado === "jugador") {
        resultadoTexto.textContent = `¡${opcionJugador} gana a ${opcionPC}! ¡Tú ganas!`;
    } else {
        resultadoTexto.textContent = `¡${opcionPC} gana a ${opcionJugador}! ¡PC gana!`;
    }
}

// Función para mostrar al ganador del juego

function mostrarGanador(ganador) {
    const resultadoTexto = document.getElementById("resultadoTexto");
    if (ganador === "jugador") {
        resultadoTexto.textContent = `Muy bien, ${nombreJugador}!!!! GANASTE \uD83D\uDE00`;
    } else {
        resultadoTexto.textContent = "La PC ganó \u2639\uFE0F";
    }
    document.querySelector(".resultado").style.display = "block";
    
    document.querySelectorAll(".opcion").forEach(opcion => {
        opcion.disabled = true;
    });
}