
const GetTypePokemon = (type) => fetch (`ttp://localhost:8080/pokemon/{type}?type=${type}`)
.then((pokemon) => pokemon.json())
.catch((error) => {console.log(error)})

export default GetTypePokemon;