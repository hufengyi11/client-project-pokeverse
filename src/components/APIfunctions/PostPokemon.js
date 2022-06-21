
const PostPokemon = (newPokemon) => fetch ("http://localhost:8080/pokemon", {method: 'POST', body: newPokemon})
.then((pokemon) => pokemon.json())
.catch((error) => {console.log(error)})

export default PostPokemon;