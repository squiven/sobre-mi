# Calculadora Simple

Este proyecto consiste en una calculadora simple implementada en HTML, CSS y JavaScript. La calculadora permite realizar operaciones básicas de suma, resta, multiplicación y división entre dos números.

## Características

- **Operaciones Soportadas:** Suma, resta, multiplicación y división.
- **Validación de Entrada:** Los valores ingresados en los campos de número son validados para asegurarse de que sean números válidos.
- **División por Cero:** Se maneja la situación en la que el segundo número ingresado para la división es cero, mostrando una alerta correspondiente.
- **Resultados Extremos:** Si el resultado de una operación es demasiado grande o pequeño para mostrarse, se muestra una alerta para indicarlo.
- **Resetear Valores:** Existe un botón para restablecer los campos de entrada y el campo de resultado a su estado original.

## Uso

1. Abre el archivo `index.html` en tu navegador web.
2. Ingresa dos números en los campos de entrada.
3. Selecciona la operación que deseas realizar en el menú desplegable.
4. Haz clic en el botón "Calcular" para obtener el resultado de la operación.
5. Si deseas realizar otra operación, puedes cambiar los números o la operación y luego hacer clic en "Calcular" nuevamente.
6. Para reiniciar los valores y la operación, haz clic en el botón "Resetear".

## Pruebas y Depuración

### Casos de Prueba

A continuación se detallan los casos de prueba que se realizaron para asegurarse de que la calculadora funcione correctamente:

1. **Suma de Números Positivos**
   - Operandos: 5, 3
   - Operador: "+"
   - Resultado Esperado: 8
   - Resultado Obtenido: 8

2. **Resta de Números Negativos**
   - Operandos: -10, -4
   - Operador: "-"
   - Resultado Esperado: -6
   - Resultado Obtenido: -6

3. **Multiplicación de Números Decimales**
   - Operandos: 2.5, 3.5
   - Operador: "*"
   - Resultado Esperado: 8.75
   - Resultado Obtenido: 8.75

4. **División con Resultado Entero**
   - Operandos: 15, 3
   - Operador: "/"
   - Resultado Esperado: 5
   - Resultado Obtenido: 5

5. **División por Cero**
   - Operandos: 10, 0
   - Operador: "/"
   - Resultado Esperado: Alerta de "No se puede dividir por cero."
   - Resultado Obtenido: Alerta de "No se puede dividir por cero."

6. **Número Inválido**
   - Operandos: "abc", 5
   - Operador: "+"
   - Resultado Esperado: Alerta de "Ingrese números válidos."
   - Resultado Obtenido: Alerta de "Ingrese números válidos."

### Correcciones y Soluciones

Durante las pruebas, se identificaron los siguientes problemas y se implementaron soluciones correspondientes:

1. **División por Cero:**
   - Problema: La calculadora permitía dividir por cero.
   - Solución: Se agregó una verificación para evitar la división por cero y mostrar una alerta en caso de intentarlo.

2. **Número Inválido:**
   - Problema: Se podían ingresar caracteres no numéricos en los campos de número.
   - Solución: Se implementó la función `validarOperandos()` para asegurarse de que los valores ingresados sean números válidos.


### Resultados

Después de realizar las correcciones y ajustes mencionados, la calculadora fue probada nuevamente con todos los casos de prueba. En todos los casos, la calculadora funcionó según lo esperado y mostró los resultados correctos o las alertas correspondientes en situaciones inválidas.


Creado por Sebastián Quiven.