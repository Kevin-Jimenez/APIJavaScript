console.log("*** consumo de api ***");

// definir la url que vamos a consumir -----

const url = "https://www.balldontlie.io/api/v1/players/";

function buscar(){
    let nombre1 =  document.getElementById("nom1").value.toLowerCase();
    let nombre2 =  document.getElementById("nom2").value.toLowerCase();

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

  
  
 // aca se tre todo el contenido de la data de la api
  console.log (" lo que trajo fue ", data)
  let html = "";
  data.data.forEach((matachito) => {

    if (matachito.first_name.toLowerCase() == nombre1 || matachito.first_name.toLowerCase() == nombre2) {
        html += `<div class="cards">`;
    html += `<div>`;
    html += `<h2>JUGADOR</h2>`;
    html += `<small class="txtSmall">Nombre</small>`;
    html += `<p class="txtP">${matachito.first_name}</p>`;
    html += `<small class="txtSmall">Apellido</small>`;
    html += `<p class="txtP">${matachito.last_name}</p>`;
    html += `<small class="txtSmall">Posicion</small>`;
    html += `<p class="txtP">${matachito.position}</p>`;
    html += `<small class="txtSmall">Altura en pies</small>`;
    html += `<p class="txtP">${matachito.height_feet}</p>`;
    html += `<small class="txtSmall">Peso</small>`;
    html += `<p class="txtP">${matachito.weight_pounds} L.</p>`;
    html += `<small class="txtSmall">Equipo</small>`;
    html += `<p class="txtP">${matachito.team.name} L.</p>`;
    html += `</div>`;
    html += `</div>`;
    }
    
    // console.log( "LA FOTO [ " + matachito.image + " ] NOMBRE [ " + matachito.name + " ] ESPECIE [ " + matachito.species + " ]");
  });
  document.getElementById("contenedorTodo").innerHTML = html;

};




getData(url);
}