import App from "./components/App.js";
import pokemon from "./data/pokemon/pokemon.js";
/* timer 
   sec++;
if (sec == 60) {
  min = min + 1;
  sec = 0;
}
if (min == 60) {
  hr = hr + 1;
  min = 0;
  sec = 0;
}
elStopwatch.innerHTML = hr + ":" + min + ":" + sec; 
timer */

document.getElementById("root").appendChild(App(pokemon.items));
let domCardsFront = document.querySelectorAll(".front");
console.log(domCardsFront);


let domCardsBack = document.querySelectorAll(".back");
console.log(domCardsBack);


let contador = 0;
console.log(contador);

let flipTwo = [];
let idsFlipped = [];
//let index = [];
domCardsFront.forEach(function (item) {
  item.addEventListener("click", function () {
    let idObtained = item.getAttribute("data-id");
    let indexObtained = item.getAttribute("data-index");
    console.log({ indexObtained });
    flipTwo.push(idObtained);
    idsFlipped.push(indexObtained);

    if (flipTwo.length === 2) {
      console.log({ idsFlipped });
      if (flipTwo[0] === flipTwo[1]) {
        ++contador;
        console.log("son iguales");
        console.log(contador);

        flipTwo = [];
        idsFlipped = [];

        if (contador === 9) {
          console.log(contador);
          setTimeout(
            () =>
            Swal.fire({
              title: "¡Felicitaciones!",
              text: "Eres un verdadero maestro Pokemon",
              imageUrl: "/memorymatchtiarenico/whatpkm.gif",
              imageWidth: 400,
              imageHeight: 250,
            }).then(function(){
              window.location = "pantalla3.html"
            }),
            850
          );
        }
      } else {
        setTimeout(() => {
          flipTwo = [];

          console.log("no son iguales");
          domCardsBack[idsFlipped[0]].classList.remove("show");
          domCardsBack[idsFlipped[0]].classList.add("hide");
          domCardsFront[idsFlipped[0]].classList.add("show");
          domCardsFront[idsFlipped[0]].classList.remove("hide")
          domCardsBack[idsFlipped[1]].classList.remove("show");
          domCardsBack[idsFlipped[1]].classList.add("hide");
          domCardsFront[idsFlipped[1]].classList.add("show");
          domCardsFront[idsFlipped[1]].classList.remove("hide");
          idsFlipped = [];
        }, 350);
      }
    }
  });
});


  
/*function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }*/