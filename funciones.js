var personajes = null;
function CargarPersonajes() {
  document.getElementById("cargar").style = "display: none;";
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((result) => {
      personajes = result.data.results;
      personajes.map((personaje) => {
        const { id, name, species, origin, status, location, image } = personaje;

        document.getElementById("listado").innerHTML += `
        <div class="listItem" onclick="mostrarInfo(${id - 1 })">
          <img src=${image}>
          <div id="textos">
            <b> ${name} </b><br>
          </div>
        </div>
        `;

        console.log(document.getElementById("listado").style.display);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function mostrarInfo(id){
  document.getElementById("listado").style.display = "none";
  document.getElementById('modal').style.display = "block";
  const personaje = personajes[id];
  document.getElementById('modal').innerHTML =  `
    <img src=${personaje.image}>
    <h1> ${personaje.name} </h1>
    <p> <i>Species</i>: ${personaje.species} </p>
    <p> <i>Origin</i>: ${personaje.origin.name} </p>
    <p> <i>Status</i>: ${personaje.status} </p>
    <p> <i>Location</i>: ${personaje.location.name} </p>
    <button onclick="cerrarModal();"> Cerrar </button>
  `;
}

function cerrarModal(){
  document.getElementById("listado").style.display = "";
  document.getElementById('modal').innerHTML = "";
  document.getElementById('modal').style.display = "none";
}