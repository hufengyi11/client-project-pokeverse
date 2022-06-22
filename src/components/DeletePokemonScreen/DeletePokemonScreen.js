import ButtonFunctions from "../ButtonFunctions"
import { useState } from "react";
import DeletePokemon from "../APIfunctions/DeletePokemon";


const DeletePokemonScreen = ({ goToHomeScreen_FromDeletePokemonScreen }) => {


    const [pokemonId, setPokemonId] = useState([]);




    return (
        <>


            <form>
                <label htmlFor="name">Delete Pokemon by ID</label>
                <input
                    className="label"
                    type='text'
                    onChange={(event) => {
                        setPokemonId(event.target.value)
                    }} />
                <label>Press A to continue</label>
            </form>

            <button
                className="yesButton-invisible"
                onClick={() => { DeletePokemon(pokemonId) }}></button>


            <ButtonFunctions
                goToHomeScreen_FromDeletePokemonScreen={goToHomeScreen_FromDeletePokemonScreen}
                screen={'DeletePokemonScreen'}
            />
        </>

    )

}

export default DeletePokemonScreen