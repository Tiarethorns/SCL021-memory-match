let queryParams = new URLSearchParams(window.location.search);

let nameUser = queryParams.get("name");
let cohorte = queryParams.get("cohorte");
console.log(nameUser)
//alert ("Hola " + nameUser + " del cohorte " + cohorte + " ahora pondrás a prueba tu memoria");

Swal.fire({
    
    title: 'HORA DE JUGAR',
    text: 'Ahora ' + nameUser + ' del cohorte ' + cohorte + ' pondra a prueba su memoria',
    imageUrl: "/memorymatchtiarenico/Pokemon-Logo.png",
    
   // background: 'radial-gradient(circle, rgba(255,222,222,1) 0%, rgba(171,201,255,1) 100%)',
        
  })



  