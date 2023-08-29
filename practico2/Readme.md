# **Piedra Papel Tijera**

Este es un juego simple de **piedra, papel o tijera** que se puede jugar en el navegador. Es un juego clásico de azar y estrategia, donde tienes que anticiparte a la elección de tu oponente y elegir la opción que le gane. Es un juego divertido y fácil de aprender, ideal para pasar el rato.

## **Cómo jugar**

- Ingresa tu nombre y haz clic en enviar. Esto te permitirá personalizar el juego con tu nombre.
- Elige una de las tres opciones: **piedra, papel o tijera**. Puedes hacer clic en los botones que tienen las imágenes de cada opción.
- La computadora también elegirá una opción al azar.
- Se compararán las opciones y se determinará el ganador según las siguientes reglas: 
    - **Piedra** gana a **Tijera**.
    - **Tijera** gana a **Papel**.
    - **Papel** gana a **Piedra**.
    - Si ambos eligen la misma opción, es un **empate**.
- El marcador se actualizará con el resultado de cada ronda. Verás tu nombre, el de la computadora y el número de victorias de cada uno.
- El juego termina cuando uno de los dos llegue a **5 victorias**. Se mostrará un mensaje con el resultado final y la opción de reiniciar el juego.
- Para reiniciar el juego, haz clic en el botón reiniciar. Esto borrará el marcador y te permitirá volver a ingresar tu nombre.

## **Tecnologías utilizadas**

- HTML: para crear la estructura básica del juego, con etiquetas como header, article, div, input, button, etc.
- CSS: para darle estilo al juego, con propiedades como color, font-family, font-size, border, margin, padding, etc.
- JavaScript: para darle funcionalidad al juego, con variables, funciones, eventos, condicionales, bucles, etc.

## **Código JavaScript**

El código JavaScript del juego se encuentra en el archivo `script.js`. A continuación se explica brevemente lo que hace cada parte del código:

- Se definen las variables globales que se usarán en el juego: `opciones`, `victoriasJugador`, `victoriasPC`, `intentos`, `nombreJugador`.
- Se agrega un evento `click` al botón "Enviar", que verifica si el usuario ha ingresado su nombre y oculta la pantalla inicial para mostrar los botones de las opciones. También actualiza el nombre del jugador y llama a la función `actualizarMarcador`.
- Se agrega un evento `click` a cada botón de opción, que verifica si el usuario ha ingresado su nombre y obtiene la opción elegida por el jugador y la computadora. También muestra el mensaje con las elecciones de ambos y llama a las funciones `determinarGanador`, `mostrarResultado`, `actualizarMarcador` y `mostrarGanador`.
- Se define la función `actualizarMarcador`, que actualiza los elementos del HTML con las victorias del jugador y la computadora.
- Se agrega un evento `click` al botón "Reiniciar", que reinicia los valores de las variables globales y muestra la pantalla inicial para ingresar el nombre. También oculta la pantalla de resultado y borra el mensaje con las elecciones. Finalmente llama a la función `actualizarMarcador` y habilita los botones de opción.
- Se define la función `determinarGanador`, que recibe como parámetros la opción del jugador y la computadora y devuelve un string con el resultado de la ronda: "empate", "jugador" o "pc".
- Se define la función `mostrarResultado`, que recibe como parámetros el resultado de la ronda, la opción del jugador y la computadora y muestra un mensaje en el HTML con el resultado.
- Se define la función `mostrarGanador`, que recibe como parámetro el ganador del juego ("jugador" o "pc") y muestra un mensaje en el HTML con el ganador. También oculta los botones de opción y muestra el botón de reiniciar. Además deshabilita los botones de opción para evitar que el usuario siga jugando después de terminar el juego.

## **Categoría CSS**

El código CSS del juego se encuentra en el archivo `style.css`. A continuación se explica brevemente lo que hace cada parte del código:

- Se define el estilo del elemento `body`, que contiene todo el juego. Se le da una fuente, un margen, un padding, un display, una dirección, un alineamiento y un color de fondo.
- Se define el estilo del elemento `.container`, que contiene el título, el input, los botones y el mensaje. Se le da un color de fondo, un padding, un borde redondeado, una sombra y un alineamiento de texto.
- Se define el estilo del elemento `.opcion`, que contiene las imágenes de las opciones. Se le da un display, un margen, un cursor y una transición. También se le da un alineamiento de texto y se le agrega un efecto de escala al pasar el mouse por encima.
- Se define el estilo del elemento `.opcion img`, que contiene las imágenes de las opciones. Se le da un ancho y una altura.
- Se define el estilo del elemento `.resultado`, que contiene el mensaje con el resultado de cada ronda. Se le da un margen, un tamaño de fuente, un alineamiento de texto..
- Se define el estilo del elemento `h2`, que contiene el título del juego. Se le da un alineamiento de texto.
- Se define el estilo del elemento `.marcador_jug`, que contiene el nombre y las victorias del jugador. Se le da un alineamiento de texto.
- Se define el estilo del elemento `.marcador_pc`, que contiene el nombre y las victorias de la computadora. Se le da un alineamiento de texto.

## **Autor**

Este juego fue creado por Sebastián Quiven.