//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from "../data/pokemon/pokemon.js";
//console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//
let flipTwo = []; // arreglo que acumula los datos a comparar posteriormente
const handleClick = (cardBack, cardFront) => { // Funcion que da el giro a la carta al hacer el click para lo que utilizamos clases de show y hide
  cardBack.classList.add("show");
  cardBack.classList.remove("hide");
  cardFront.classList.add("hide");
  cardFront.classList.remove("show");
  //console.log(event.target)
};



const App = () => { // traemos los items desde la data 
  const baraja = pokemon.items;
  //console.log(baraja);

  var barajaDoble = baraja.concat(baraja); //multiplicar las imagenes de la data por dos para generar los pares de cartas

  function shuffle() { //Función me mezcla las cartas
    barajaDoble.sort(() => Math.random() - 0.5);
  }
  shuffle();

  const board = document.createElement("div"); //División tablero
  board.className = "board";

  //const el = document.createElement("div");
  for (let i = 0; i < barajaDoble.length; i++) { //Ciclo para crear tarjetas y sus parejas desde el array.
    const cards = document.createElement("div"); //Cada recorrido genera una carta que corresponde a un div.
    cards.className = "cards"; //Nombre de clase DIVS tarjetas.
    board.appendChild(cards); //Insertamos los DIVS de las cartas en tablero con appenChild

    //console.log(baraja[i].image)

    const cardBack = document.createElement("div"); //Constante para separar la parte de adelante de las cartas.
    cardBack.className = "hide"; //Le dimos la clase "hide" para que el pokemón se esconda (Creado en CSS).
    cardBack.classList.add("back"); // agregamos clase back para representar divs de tarjeta trasera
    cardBack.setAttribute("data-id", barajaDoble[i].id);
    cardBack.setAttribute("data-index", i);



    cards.appendChild(cardBack); //Insertamos el DIV cardBack dentro del div Cards

    const backImage = document.createElement("img"); //Creamos el reverso de las cartas
    //backImage.className = "hide";
    backImage.src = barajaDoble[i].image; //Se asigna imagen de la data DIV creado
    backImage.id = barajaDoble[i].id; //Se asigna id 
    cardBack.appendChild(backImage);

    const cardFront = document.createElement("div");
    cardFront.id = i;
    cardFront.name = barajaDoble[i].id;
    cardFront.className = "cardFront";
    cardFront.classList.add("front"); // agregamos clase front para representar divs de tarjeta frontal
    cardFront.setAttribute("data-id", barajaDoble[i].id);
    cardFront.setAttribute("data-index", i);

    cards.appendChild(cardFront);

    const cardImage = document.createElement("img"); //Constante para atribuir imagen a la parte de las cartas que es visible por el usuario (Pokebolas)
    cardImage.alt = "pokeball";
    cardImage.className = "image";
    cardImage.src =
      "https://pngimg.com/uploads/pokeball/pokeball_PNG22.png";
    cardFront.appendChild(cardImage);

    cardFront.onclick = (event) => {
      handleClick(cardBack, cardFront, event);
      flipTwo.push({id:barajaDoble[i].id,index:i})
      console.log(flipTwo);

    };
   

   


  }


  
  return board;
};


export default App;
