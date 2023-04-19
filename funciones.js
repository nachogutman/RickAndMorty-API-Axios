function CargarPersonajes() {
  document.getElementById("cargar").style = "display: none;";
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((result) => {
      const personajes = result.data.results;
      personajes.map((personaje) => {
        const { id, name, species, origin, status, location, image } = personaje;

        document.getElementById("listado").innerHTML += `
        <div class="listItem" onclick="mostrarInfo(${id})">
          <img src=${image}>
          <div id="textos">
            <b> ${name} </b><br>
          </div>
        </div>
        `;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function mostrarInfo(id){
  console.log(id);
}
