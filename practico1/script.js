let $opciones = document.getElementById("operacion");
let $resultado = document.getElementById("resultado");
let $valor1 = document.getElementById("valor1");
let $valor2 = document.getElementById("valor2");

// Función para validar que los operandos ingresados sean números válidos

function validarOperandos() {
    let num1 = Number($valor1.value);
    let num2 = Number($valor2.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Ingrese números válidos"); // Alerta por otro caracter posible, aunque esta forzado el ingreso de números.
        return false;
    }

    if ($valor1.value.trim() === "" || $valor2.value.trim() === "") { //Utilizo .trim para eliminar espacios en blanco al inicio o final.
        alert("Debe ingresar un número"); // Alerta al no ingresar un número.
        return false;
    }

    return true;
}

function calcular() {
    if (!validarOperandos()) {
        return;
    }

    let num1 = Number($valor1.value);
    let num2 = Number($valor2.value);
    let op = $opciones.value;
    let res;

    if (op === "+") {
        res = num1 + num2;
    } else if (op === "-") {
        res = num1 - num2;
    } else if (op === "*") {
        res = num1 * num2;
    } else if (op === "/") {
        if (num2 === 0) {
            alert("No se puede dividir por cero."); // Aquí realice una alerta indicando que no se puede dividir por cero
            return;
        }
        res = num1 / num2;
    }
    
    let resultLargo = res.toString();

    if (resultLargo.indexOf("e") !== -1) {
        alert("El resultado es demasiado grande o pequeño para mostrarse.");
        return;
    }

    $resultado.value = res;
}

// Función para resetear la calculadora

function resetear() {
    $valor1.value = "";
    $valor2.value = "";
    $resultado.value = "";

    $opciones.value = "+";
}