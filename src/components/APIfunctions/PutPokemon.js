
const PutPokemon = (pokemonId, pokemonName, pokemonType, pokemonRating) => fetch (`http://localhost:8080/pokemon/${pokemonId}?name=${pokemonName}&type=${pokemonType}&rating=${pokemonRating}`, {method: 'PUT'})
.catch((error) => {console.log(error)})

export default PutPokemon;