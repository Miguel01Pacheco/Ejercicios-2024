//Referencio el div de mi HTML necesario para agregar mi contenido dinámico.
const $grid = document.querySelector(".grid");
//Funcion para poner "Si" en caso de true o "No"en caso de false.
function esMago(valor){
    if(valor){
        return "Es mago";
    }else{
        return "No es mago";
    }
}
//Funcion para reemplazar la imagen vacia por una por defecto.
function imageOk(valor,valor2){
    if(valor ==="" && valor2 ==="male"){
        return "../assets/hombreDefault.jpeg";
    }else if (valor ==="" && valor2 ==="female"){
        return "../assets/mujerDefault.jpeg";
    }else if (valor ==="" && valor2 ===""){
      return "../assets/genericaDefault.jpeg"
    }

        return valor;
    
}
//Funcion para cambiar de clase segun la casa del personaje.
function house(valor){
  if(valor ==="Gryffindor"){
    return "Gryffindor";
  }else if (valor === "Slytherin"){
    return "Slytherin";
  }else if (valor === "Ravenclaw"){
    return  "Ravenclaw";
  }else if (valor === "Hufflepuff"){
    return "Hufflepuff";
  }
  return valor;
}

//Mediante un fecth obtengo los datos desde la API de Harry Pother.
fetch("https://hp-api.onrender.com/api/characters")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((data) => {
    let personajes = data;
    console.log(personajes);    
//Bucle para filtrar los personajes que no tienen imagen
/*
   personajes = personajes.filter((personaje)=>
{
    if (personaje.image !=="")
        return personaje;
})
console.log(personajes);
*/
//Array para guardar el contenido html.
let contenidoHtml =[];        
//Bucle para iterar mi array de personajes
    personajes.forEach((personaje) => {
      contenidoHtml +=
     `<div class= "card">
      <h1 class="titulo">${personaje.name}</h1>
      <img  class="image" src="${imageOk(personaje.image,personaje.gender)}" alt="imagen de ${personaje.name}">
      <p class = "${house(personaje.house)}" > ${house(personaje.house)}</p>
      <p  class ="ancestry">${personaje.ancestry}</p>
      <p class ="wizard">${esMago(personaje.wizard)}</p>
      </div>
      `;
    });
//Muestro en pantalla las cartas
$grid.innerHTML = contenidoHtml;   
  });