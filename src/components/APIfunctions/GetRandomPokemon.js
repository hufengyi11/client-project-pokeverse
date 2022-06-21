
const GetRandomPokemon = () => fetch ("http://localhost:8080/pokemon/random")
.then((pokemon) => pokemon.json())
.catch((error) => {console.log(error)})

export default GetRandomPokemon;