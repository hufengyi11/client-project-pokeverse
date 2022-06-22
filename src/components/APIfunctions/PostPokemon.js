
const PostPokemon = (newPokemon) => fetch ("http://localhost:8080/pokemon", {
    method: 'POST', 
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: newPokemon})
.then((pokemon) => pokemon.json())
.catch((error) => {console.log(error)})

export default PostPokemon;