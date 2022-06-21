
const DeletePokemon = (pokemonId) => fetch (`http://localhost:8080/pokemon/${pokemonId}`, {method: 'DELETE'})
.catch((error) => {console.log(error)})

export default DeletePokemon;