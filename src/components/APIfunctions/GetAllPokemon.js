
const GetAllPokemon = () => fetch ("http://localhost:8080/pokemon", {method: 'GET'})
.then((pokemon) => pokemon.json())
.catch((error) => {console.log(error)})

export default GetAllPokemon;