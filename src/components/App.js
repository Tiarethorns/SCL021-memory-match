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
let flipTwo = [];
const handleClick = (cardBack, cardFront, event) => {
  cardBack.classList.add("show");
  cardBack.classList.remove("hide");
  cardFront.classList.add("hide");
  cardFront.classList.remove("show");
  //console.log(event.target)
};

const App = () => {
  const baraja = pokemon.items;
  //console.log(baraja);

  var barajaDoble = baraja.concat(baraja);

  function shuffle() {
    barajaDoble.sort(() => Math.random() - 0.5);
  }
  shuffle();

  const board = document.createElement("div");
  board.className = "board";

  //const el = document.createElement("div");
  for (let i = 0; i < barajaDoble.length; i++) {
    const cards = document.createElement("div");
    cards.className = "cards";
    board.appendChild(cards);

    //console.log(baraja[i].image)

    const cardBack = document.createElement("div");
    cardBack.className = "hide";
    cards.appendChild(cardBack);

    const backImage = document.createElement("img");
    //backImage.className = "hide";
    backImage.src = barajaDoble[i].image;
    backImage.id = barajaDoble[i].id;
    cardBack.appendChild(backImage);

    const cardFront = document.createElement("div");
    cardFront.id = i;
    cardFront.name = barajaDoble[i].id;
    cardFront.className = "cardFront";
    cards.appendChild(cardFront);

    const cardImage = document.createElement("img");
    cardImage.alt = "pokeball";
    cardImage.className = "image";
    cardImage.src =
      "https://img.game.co.uk/assets/features/hubs/pokemon/backCover.png";
    cardFront.appendChild(cardImage);

    cardFront.onclick = (event) => {
      handleClick(cardBack, cardFront, event);
      flipTwo.push(barajaDoble[i].id);
    }
      console.log(flipTwo);
     
      /*let contador = 0;

       if (handleClick.length === 2) {
        if (
          handleClick[0](barajaDoble[i].id) ===
          handleClick[1](barajaDoble[i].id)
        ) {
          contador++;
        }else{
          setTimeout(
            () => handleClick[1].cardBack.classList.remove("hide"),
            1000
          );
          setTimeout(
            () => handleClick[0].cardBack.classList.remove("hide"),
            1000
          );
        }

        if (contador === 9) {
          setTimeout(
            () =>
              Swal.fire('Buen trabajo!',
              'Terminaste el juego!',
              'Si que conoces muy bien a esos pokemón'),
            850
          );
        }
      }*/
    };
  }

  return board;


export default App;
