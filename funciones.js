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
            console.log(pokemon);
            const {abilities, weight, height, id, types} = pokemon;

            document.querySelector("#listado").innerHTML += `<div class="listItem" id="${id}">`;
            document.getElementById(id).innerHTML += `
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png"> 
              <p> ${name} </p>
              Height:${height}cm / Weight:${weight}kg 
              <br>
            `;
            
            types.map((type) => {
              document.getElementById(id).innerHTML += `<div class="${type.type.name}"> ${type.type.name} </div>`;
            });
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
