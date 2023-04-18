function CargarPokemones() {
  document.getElementById('cargar').style = "display: none;";
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then((result) => {
      const pokemones = result.data.results;
      pokemones.map((pokemon) => {
        const { name, url } = pokemon;

        axios
          .get(url)
          .then((result) => {
            const pokemon = result.data;
            const {abilities, weight, height, sprites} = pokemon;

            document.querySelector("#listado").innerHTML += `
            <div class="listItem">
              <img src="${sprites.front_default}"> 
              <p> ${name} </p>
              H: ${height}cm / W ${weight}kg
            </div>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
