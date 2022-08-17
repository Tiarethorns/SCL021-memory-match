let queryParams = new URLSearchParams(window.location.search);

let nameUser = queryParams.get("name");
let cohorte = queryParams.get("cohorte");
console.log(nameUser)
alert ("Hola " + nameUser + " del cohorte " + cohorte + " ahora pondrás a prueba tu memoria");