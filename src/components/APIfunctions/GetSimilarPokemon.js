
const GetSimilarPokemon = (pokemonName) => fetch (`http://localhost:8080/pokemon/similar?name=${pokemonName}`, {method: 'GET'})
.then((pokemon) => pokemon.json())
.catch((error) => {console.log(error)})

export default GetSimilarPokemon;