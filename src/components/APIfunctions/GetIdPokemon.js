
const GetIdPokemon = (pokemonId) => fetch (`http://localhost:8080/pokemon/id?id=${pokemonId}`, {method: 'GET'})
.then((pokemon) => pokemon.json())
.catch((error) => {console.log(error)})

export default GetIdPokemon;