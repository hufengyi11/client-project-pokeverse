
const GetIdPokemon = (pokemonId) => fetch (`http://localhost:8080/pokemon/${pokemonId}`, {method: 'GET'})
.then((pokemon) => pokemon.json())
.catch((error) => {console.log(error)})

export default GetIdPokemon;