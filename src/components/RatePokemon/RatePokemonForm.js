import React from 'react';
import './RatePokemonForm.css';
import PutPokemon from '../APIfunctions/PutPokemon';
import ButtonFunctions from '../ButtonFunctions';

const RatePokemonForm = ({goToHomeScreen_FromRatePokemonScreen, goToFindTrainersScreen_FromRatePokemonScreen}) => {

    const [pokeId, setPokeId] = React.useState("");
    const [pokemonRating, setPokemonRating] = React.useState("");


    const handleSumbit = async () => {

        // const result = await PutPokemon(
        //     pokeId, 
        //     pokeName[0].toUpperCase() + pokeName.substring(1).toLowerCase(),
        //     null,
        //     pokemonRating
        // );

        // if (result.status === 200) {
        //     console.log(result);
        // }
        // else {
        //     console.log("FAILED");
        // }

    }

    const getPokemonImage = () => {

    }
    

    return (
        <>
            <section className="rate-pokemon-container">
                <div className="rate-pokemon-title">Rate Pokemon</div>
                <div className="rate-pokemon-poke-id">Poke ID:</div>
                <input 
                    type="text" 
                    className="rate-pokemon-id" 
                    value={pokeId} 
                    onChange={(event) => {
                            setPokeId(event.target.value)
                        }}
                />
                <div className="rate-pokemon-poke-rating">Rating:</div>
                <input 
                    type="text" 
                    className="rate-pokemon-rating" 
                    value={pokemonRating} 
                    onChange={(event) => {
                            setPokemonRating(event.target.value)
                        }}
                />
                <div className="rate-pokemon-instruction">Press A to rate</div>
                <button 
                    className="yesButton-invisible" 
                    onClick={() => {handleSumbit()}}
                ></button>
                <ButtonFunctions 
                    goToHomeScreen_FromRatePokemonScreen={goToHomeScreen_FromRatePokemonScreen}
                    screen={'RatePokemonScreen'}
                />
            </section>
        </>
    )
}

export default RatePokemonForm;