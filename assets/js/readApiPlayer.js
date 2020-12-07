console.log("*** consumo de api ***");

// definir la url que vamos a consumir -----

const url = "https://www.balldontlie.io/api/v1/players/237";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      imprimirDatos(json);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

let TodaData;
const imprimirDatos = (data) => {
  TodaData = data;
  let i="";

 // aca se tre todo el contenido de la data de la api
  console.log (" lo que trajo fue ", data)
  let html = "";
    html += `<div class="cards">`;
    html += `<div>`;
    html += `<h2>JUGADOR</h2>`;
    html += `<small class="txtSmall">Nombre</small>`;
    html += `<p class="txtP">${data.first_name}</p>`;
    html += `<small class="txtSmall">Apellido</small>`;
    html += `<p class="txtP">${data.last_name}</p>`;
    html += `</div>`;
    html += `<button id="vermas" class="vermas"> ver mas</button>`;
    html += `</div>`;
    // console.log( "LA FOTO [ " + matachito.image + " ] NOMBRE [ " + matachito.name + " ] ESPECIE [ " + matachito.species + " ]");
  
  document.getElementById("contenedorTodo").innerHTML = html;

  
  //VER MAS DE LA API
 const vermas = document.getElementById("vermas");

 vermas.addEventListener('click', ()=>{
   if(!i){
    i += `<div class="cards">`;
    i += `<div>`;
    i += `<h2>JUGADOR</h2>`;
    i += `<small class="txtSmall">Nombre</small>`;
    i += `<p class="txtP">${data.first_name}</p>`;
    i += `<small class="txtSmall">Apellido</small>`;
    i += `<p class="txtP">${data.last_name}</p>`;
    i += `</div>`;
    i += `<div>`;
    i += `<h2>EQUIPO</h2>`;
    i += `<small class="txtSmall">Nombre de equipo</small>`;
    i += `<p class="txtP">${data.team.full_name}</p>`;
    i += `<small class="txtSmall">Ciudad</small>`;
    i += `<p class="txtP">${data.team.city}</p>`;
    i += `<small class="txtSmall">Abbreviacion</small>`;
    i += `<p class="txtP">${data.team.abbreviation}</p>`;  
    i += `</div>`;
    i += `</div>`;
    document.getElementById("contenedorTodo").innerHTML = i;
   }
   else{
    document.getElementById("contenedorVermas").style.display='none';
    document.getElementById("vermas").innerHTML = 'ver mas';
 
   }
   
 
 })


};




getData(url);