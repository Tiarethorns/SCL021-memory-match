# Memory Match Game

## Índice

- [1. Breve descripción del proyecto](#1-breve-descripción-del-proyecto)
- [2. Historias de usuario](#2-historias-de-usuario)
- [3. Prototipo de baja fidelidad](#3-prototipo-de-baja-fidelidad)
- [4. Prototipo de alta fidelidad](#4-prototipo-de-alta-fidelidad)
- [5. Funcionalidades](#5-funcionalidades)
- [6. Diseño Final](#6-diseño-final)
- [7. Pendiente](#7-pendiente)

---

## 1. Breve descripción del proyecto "Pokematch"

Memory match es un juego de cartas en donde todas estas se distribuyen boca abajo y la usuaria va descubriendo de a dos en dos con el fin de conseguir pares iguales hasta que todas esten con su respectiva pareja.
El contexto de nuestro proyecto es un concurso para las egresadas y estudiantes de Laboratoria en el cual el único requisito es ingresar el cohorte y nombre.
En Pokematch se dispone de 18 cartas para dar vuelta y encontrar los pares en un tiempo de 40 segundos, si esto se consigue estará participando por una Nintendo Switch + Pokemon legends: Arceus, de no completar el tablero en el tiempo indicado se le llevará a una pantalla de game over en donde podrá reingresar al juego.

## 2. Historias de Usuario

Como primer paso decidimos realizar un formulario haciendo diversas preguntas para investigar el interés que existe en la comunidad de laboratoria por la industria de pokemón y sus juegos. Para esto consultamos principalmente por rangos etarios, género, accesibilidad a las consolas de juego e interés en participar del concurso. con esta data concluimos que el 48,1% tiene entre 26 y 30 años, el 96,3% es de género femenino, el 55,6% ya es usuario de juegos de ppkemón y el 80% lo hace desde su telefóno móvil, el 63% no tiene una consola de nintendo switch y el 74,1% esta interesado en ganar esta consola. Es en vista de los datos anteriores que decidimos utilizar la tematica de pokemon para nuestro juego de memory match, la paleta de colores existente y también darle el contexto de consurso por una consola de nintendo switch.

![6](https://user-images.githubusercontent.com/106929329/185771011-d8f5e826-248e-4267-966d-a850115ec77e.jpeg)
![7](https://user-images.githubusercontent.com/106929329/185771012-276ac7ce-2810-4ab5-9ae7-2cabd324e537.jpeg)
![8](https://user-images.githubusercontent.com/106929329/185771013-36746afd-6b43-48b1-b61f-58970c71ae23.jpeg)
![9](https://user-images.githubusercontent.com/106929329/185771014-e3a64f96-4f17-436f-8466-f745c59ac068.jpeg)
![10](https://user-images.githubusercontent.com/106929329/185771015-69099f45-ab0c-4e77-b220-9dcf4b34b013.jpeg)
![11](https://user-images.githubusercontent.com/106929329/185771016-3be651d7-544c-43fb-8274-cc4d67f85a37.jpeg)
![12](https://user-images.githubusercontent.com/106929329/185771018-c253422d-b5cb-4777-aa0d-544130f24922.jpeg)
![13](https://user-images.githubusercontent.com/106929329/185771019-14952ffc-74c5-407c-89d7-64972403b5a5.jpeg)


## 3. Prototipo de baja fidelidad
![PBF1](https://user-images.githubusercontent.com/106929329/185770990-7d4c2df8-8d4f-4197-b6ed-2a7826974cc7.jpeg)
![PBF2](https://user-images.githubusercontent.com/106929329/185770993-470304f1-e88c-4c3b-9925-7babe5bcbe22.jpeg)


## 4. Prototipo de alta fidelidad

![P1](https://user-images.githubusercontent.com/106929329/185771050-4b2deef7-8250-4c46-a6a4-a5c500fc8351.jpg)
![P2](https://user-images.githubusercontent.com/106929329/185771072-2d1eda0f-5570-444c-a0b0-7ea0f69feb79.jpg)
![P3](https://user-images.githubusercontent.com/106929329/185771076-1620405a-5390-487a-98a9-aecb4627461a.jpg)
![P3](https://user-images.githubusercontent.com/106929329/185771056-f35eb2ff-ccb8-4fd8-a19c-5cfd1164f650.jpg)
![P4](https://user-images.githubusercontent.com/106929329/185771094-f5a6f49f-b61c-4f52-9786-53e3991e5cac.jpg)

## 5. Funcionalidades

Nuestro juego de pokematch cuenta con diversas funcionalidades tales como revolver las cartas en cada partida, permitir que el usuario destape de dos en dos haciendo click en el reverso de cada logo de pokebola y que estas se queden destapadas en caso de ser iguales y de lo contrario volver a cubrirse, mostrando el lado del reverso nuevamente. Además agregamos un cronómetro de 40 segundos para dar un poco más de dificultad y para hacerlo más personalizado recogemos los datos de las jugadoras en la página inicial y luego las saludamos por su nombre cuando comienza el juego.

## 6. Diseño Final

![p1](https://user-images.githubusercontent.com/106929329/185771106-d7a48485-a8fc-4d02-ac58-53d9dab36a7a.png)
![p2](https://user-images.githubusercontent.com/106929329/185771108-70abbe0d-89b3-4563-aea9-abea3ed577cb.png)
![p3](https://user-images.githubusercontent.com/106929329/185771114-5031944e-7703-4ff9-b795-ba486ab89e9c.png)
![p4](https://user-images.githubusercontent.com/106929329/185771126-daab9046-2ede-4ca3-920e-fcf7b6657d33.png)
![p5](https://user-images.githubusercontent.com/106929329/185771134-c891ca64-01b4-42a5-bf53-b1a2f8619a9a.png)
![p6](https://user-images.githubusercontent.com/106929329/185771138-1d277311-4196-4080-8336-9049df0aac28.png)

## 7. Pendiente

Implementar timer, sin embargo el juego tiene la funcionalidad básica para que la usuaria pueda completar el juego una vez descubra todas las parejas de pokemón. Si hubiéramos implemetado el timer lo habriamos conectado con la página cuatro de game over cuando se complete el tiempo sin quer el usuario terminara de descubrir las parejas.
Por el momento no se ha logrado desplegar el proyecto de manera correcta en GitHub Pages, por lo que de manera provisoria se ingresa directamente a la segunda página que recibe a la usuaria con un alert y luego el tablero de juego.

https://tiarethorns.github.io/SCL021-memory-match/src/memorymatch.html
