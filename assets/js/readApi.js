console.log("*** consumo de api ***");

// definir la url que vamos a consumir -----

const url = "https://www.balldontlie.io/api/v1/teams";

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

    html += `<tr>`;
    html += `<th>Abreviacion</th>`;
    html += `<th>Ciudad</th>`;
    html += `<th>Division</th>`;
    html += `<th>Nombre</th>`;
    html += `</tr>`;
  data.data.forEach((matachito) => {
    html += `<tr>`;
    html += `<td>${matachito.abbreviation}</td>`;
    html += `<td>${matachito.city}</td>`;
    html += `<td>${matachito.division}</td>`;
    html += `<td>${matachito.full_name}</td>`;
    html += `</tr>`;
    // console.log( "LA FOTO [ " + matachito.image + " ] NOMBRE [ " + matachito.name + " ] ESPECIE [ " + matachito.species + " ]");
  });
  document.getElementById("table").innerHTML = html;
};


getData(url);