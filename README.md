# Proyecto de juego de cartas similar al Hearthstone
Repositorio del proyecto de la asignatura Procesos de Ingenería del Software

### Sprint 1: Definición del proyecto y herramientas que se utilizarán
- El objetivo es implementar una solución SaaS.
- Se decide implementar un juego de cartas tipo HearthStone
- Herramientas: NodeJS, Sublime Text 3, Kunagi (metodología SCRUM), Jasmine (cliente y servidor), GitHub

### Sprint 2: Diseño del juego (modelo) y arquitectura base SaaS
Diseño del juego BattelCards: 
- definición de las entidades (Juego, Usuario, Partida, Tablero, Zona, Carta)
- El juego tiene una colección de partidas y una colección de usuarios
- La partida tiene dos jugadores, un tablero
- Cada jugador tiene un mazo (colección de cartas), mano (hasta 10 cartas), y una zona de ataque
- Diseño UML
- Primer diseño de la arquitectura SaaS, definición de la estructura de carpetas de la solución

### Sprint 3: Implementar el API REST, Web Socket y Script de automatización
- Implementación de la interfaz REST
	 Agregar usuario
	- Crear partida
	- Elegir partida
	- Lista de partidas
	- Jugar carta
	- Atacar
	- Pasar turno

- Script de automatización para las tareas repetitivas (agregar usuarios, crear o elegir partidas, etc.)
- Implementación API Web Socket
	- Se implementa servidor Web Socket
	- Jugar carta
	- Atacar
	- Pasar turno