# space_invasion
Este es un juego simple de nave espacial en el que el usuario controla una nave y debe evitar ser golpeado por enemigos mientras dispara y destruye a los enemigos que se mueven por la pantalla.

El primer bloque de código define el canvas y su contexto 2D, y carga tres imágenes: una para la nave del jugador, una para las balas y otra para los enemigos.

A continuación, se define un objeto para la nave del jugador con su posición inicial y velocidad, así como un objeto para las balas con su posición, tamaño y velocidad.

También se establecen algunas variables importantes, como la cantidad máxima de balas que se pueden disparar al mismo tiempo, una matriz para almacenar las balas y otra para almacenar los enemigos. Además, hay una variable para llevar la cuenta de la puntuación del jugador.

Luego, hay varias funciones definidas que se encargan de dibujar la nave, las balas y los enemigos en el canvas, y de moverlos por la pantalla. También hay una función para disparar las balas y otra para manejar el evento de teclado cuando el usuario presiona la tecla de flecha izquierda, la tecla de flecha derecha o la barra espaciadora.

La función gameLoop es el ciclo principal del juego, que se ejecuta continuamente mientras el juego está en marcha. Esta función se encarga de actualizar la pantalla y llamar a las funciones de movimiento y dibujo de los elementos del juego. También se comprueba si alguna bala ha golpeado a un enemigo y se incrementa la puntuación en consecuencia. Si un enemigo ha llegado al final de la pantalla sin ser destruido, se elimina de la matriz de enemigos.

La función gameOver se llama cuando la nave del jugador colisiona con un enemigo y muestra un mensaje preguntando si el jugador quiere reiniciar el juego. Si el jugador elige reiniciar el juego, se limpian las matrices de balas y enemigos, se restablece la puntuación y se llama a la función gameLoop para comenzar de nuevo.

Por último, se llama a la función gameLoop para iniciar el juego. La función window.requestAnimationFrame() se utiliza para asegurarse de que el juego se ejecute a la velocidad de fotogramas adecuada.
![This is an image](/image/captura.jpeg)


