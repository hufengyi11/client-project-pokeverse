
const GetRatingPokemon = () => fetch ("http://localhost:8080/pokemon/rating")
.then((pokemon) => pokemon.json())
.catch((error) => {console.log(error)})

export default GetRatingPokemon;