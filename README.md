## Blockchain

### Descripción del proyecto
<p>Este proyecto es un juego multijugador para entender de que manera se minan las blockchains.</p>
<p>Consta de 3 pantallas: un login, un tablero del juego y la parte de verificación del bloque.</p>

### Tecnologías usadas
Para el desarrollo de este proyecto se usaron las siguientes tecnologías: React.Js, JavaScript, .Sass, .CSS modules, apisauce y react-router.

### Explicación del juego

### Pantalla de Login
<p>En esta pantalla los usuarios se podrán loguear para ingresar al juego.</p>

#### Pantalla de juego
<p>Esta pantalla esta conformada por:</p>

* El nombre del jugador.
* El puntaje.
* Una sección con bloques para completar el tablero.
* Dos tableros: Uno es el tablero para completar y el otro, la resolución que hay que lograr.

<p>Las últimas columnas del tablero de resolución se van coloreando dependiendo de los bloques que se usen para completar las primeras filas del tablero de juego.</p>
<p>Cada bloque consta de un numero, estos tienen que estar ordenados de mayor a menor de arriba hacia abajo y de izquierda a derecha, en el tablero de juego.</p>
<p>Cuando el tablero se completa, se activa el botón <strong>minar</strong> y al pulsarlo termina el juego de todos los jugadores y redirige a la pantalla de validación.</p>

![pantalla de juego](https://github.com/Ezequiiel98/blockchain/blob/development/assets-readme/scren-game.png)

#### Pantalla de validación
<p>En esta pantalla  todos lo jugadores van a verificar y votar si el bloque que se minó corresponde con la resolución, y si respetan el orden de mayor a menor, de arriba hacia abajo y de izquierda a derecha. </p>
<p>Si todos votan que el bloque se mino correctamente, se le dan los puntos al jugador que minó el bloque y vuelve a comenzar el juego. En el caso de no estar minado correctamente se le descuentan puntos al jugador y se sigue jugando.</p>

![pantalla de validacion](https://github.com/Ezequiiel98/blockchain/blob/development/assets-readme/screen-validacion)

### Desarrolladores

* Ezequiel Aragón. [GitHub](https://github.com/Ezequiiel98) y [Linkedin](https://www.linkedin.com/in/ezequielaragon)
* Viviana Choque. [GitHub](https://github.com/vivianachoque) y [Linkedin](https://www.linkedin.com/in/vivianachoque) 
* Branko Cruz. [GitHub](https://github.com/Brankitocruz) y [Linkedin](https://www.linkedin.com/in/brankocruz)
