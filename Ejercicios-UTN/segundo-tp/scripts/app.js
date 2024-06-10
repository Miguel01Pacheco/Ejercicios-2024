//Referencio el div de mi HTML necesario para agregar mi contenido dinámico.
const $grid = document.querySelector(".grid");
//Mediante un fecth obtengo los datos desde la API de Harry Pother.
fetch("https://hp-api.onrender.com/api/characters")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((data) => {
    const personajes = data;
    console.log(personajes);
//Bucle para iterar mi array de personajes
    personajes.forEach((personaje) => {
      $grid.innerHTML +=
     `<div id "carta">
      <h4 id="titulo">${personaje.name}</h4>
      <img  id="imagen" src="${personaje.image}" alt="imagen de ${personaje.name}">
      <p id = "casa" >Casa: ${personaje.house}</p>
      <p  id ="ancestros">Ancestros: ${personaje.ancestry}</p>
      <p id ="mago">Es mago?: ${personaje.wizard}</p>
      </div>
      `;
    });
  });