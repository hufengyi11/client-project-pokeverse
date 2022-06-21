import React from 'react';
import './RatePokemonForm.css';
import PutPokemon from '../APIfunctions/PutPokemon';
import ButtonFunctions from '../ButtonFunctions';

const RatePokemonForm = ({goToHomeScreen_FromRatePokemonScreen, goToFindTrainersScreen_FromRatePokemonScreen}) => {

    const [pokeId, setPokeId] = React.useState("");
    const [pokeName, setPokeName] = React.useState("");
    const [pokemonRating, setPokemonRating] = React.useState("");


    const handleEnter = () => {
        const result = PutPokemon(pokeId, pokeName, null, pokemonRating);
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
                <div className="rate-pokemon-poke-name">Poke Name:</div>
                <input 
                    type="text" 
                    className="rate-pokemon-name" 
                    value={pokeName} 
                    onChange={(event) => {
                            setPokeName(event.target.value)
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
                <ButtonFunctions 
                    goToHomeScreen_FromRatePokemonScreen={goToHomeScreen_FromRatePokemonScreen}
                    goToFindTrainersScreen_FromRatePokemonScreen={goToFindTrainersScreen_FromRatePokemonScreen}
                    screen={'RatePokemonScreen'}
                />
            </section>
        </>
    )
}

export default RatePokemonForm;