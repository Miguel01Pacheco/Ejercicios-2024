//Referencio el div de mi HTML necesario para agregar mi contenido dinámico.
const $grid = document.querySelector(".grid");
//Funcion para poner "Si" en caso de true o "No"en caso de false.
function siOno(valor){
    if(valor){
        return "Si";
    }else{
        return "No";
    }
}
//Funcion para reemplazar la imagen vacia por una por defecto.
function imageOk(valor){
    if(valor ==="" && valor ==="male"){
        return "https://notion-avatar.vercel.app/api/img/eyJmYWNlIjoxNCwibm9zZSI6NywibW91dGgiOjE5LCJleWVzIjo3LCJleWVicm93cyI6MywiZ2xhc3NlcyI6MywiaGFpciI6MzMsImFjY2Vzc29yaWVzIjowLCJkZXRhaWxzIjowLCJiZWFyZCI6MCwiZmxpcCI6MSwiY29sb3IiOiJyZ2JhKDI1NSwgMCwgMCwgMCkiLCJzaGFwZSI6Im5vbmUifQ==";
    }else if (valor ==="" && valor ==="female"){
        return "https://notion-avatar.vercel.app/api/img/eyJmYWNlIjowLCJub3NlIjoxMCwibW91dGgiOjE2LCJleWVzIjoyLCJleWVicm93cyI6MTUsImdsYXNzZXMiOjksImhhaXIiOjI5LCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoicmdiYSgyNTUsIDAsIDAsIDApIiwic2hhcGUiOiJub25lIn0=";
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
      <h4 class="titulo">${personaje.name}</h4>
      <img  class="image" src=${imageOk(personaje.image)} alt="imagen de ${personaje.name}">
      <p class = "house" >Casa: ${personaje.house}</p>
      <p  class ="ancestry">Ancestros: ${personaje.ancestry}</p>
      <p class ="wizard">Es mago?: ${siOno(personaje.wizard)}</p>
      </div>
      `;
    });
//Muestro en pantalla las cartas
$grid.innerHTML = contenidoHtml;   
  });