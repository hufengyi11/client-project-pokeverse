import React from 'react';
import axios from 'axios';
import ButtonFunctions from '../ButtonFunctions'
import PostPokemon from '../APIfunctions/PostPokemon'
import './CatchNewPokemon.css'

const CatchNewPokemon = ({goToHomeScreen}) => {

    const [currentPokemon, setCurrentPokemon] = React.useState({});
    const [currentPokemonImage, setCurrentPokemonImage] = React.useState("");
    const [currentPokemonName, setCurrentPokemonName] = React.useState("");

    const getRandomPokemon = async (e) => {
        e.preventDefault();
        const randomNum = Math.floor(Math.random() * 898) + 1

        try {
            const responsePokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/" + randomNum);
            const responsePokemonSpecies = await axios.get("https://pokeapi.co/api/v2/pokemon-species/" + randomNum);
            const responsePokemonRegion = await axios.get("https://pokeapi.co/api/v2/generation/" + responsePokemonSpecies.data.generation.name);

            setCurrentPokemonImage(responsePokemon.data.sprites.front_default);
            setCurrentPokemonName(responsePokemon.data.name[0].toUpperCase() + responsePokemon.data.name.substring(1));
        }
        catch (err) {
            console.log(err)
        }

    }

    const catchPokemon = () => {
        const newPokemon = {
            name: "",
            type: "",
            generation: "",
            trainer: null
        }
    }


    return (
        <>
            <div className="catch-new-pokemon-container">
                <div className="catch-new-pokemon-title">Catch Pokemon</div>
                <div className="catch-new-pokemon-current-encounter-container">
                    {
                        currentPokemonImage === "" ?
                            <span>X</span> :
                            <img 
                                src={currentPokemonImage}
                                className="catch-new-pokemon-current-pokemon"
                            />
                    }
                    <div className="catch-new-pokemon-current-name">{currentPokemonName}</div>
                </div>
                <div className="catch-new-pokemon-press-random">Press UP for new encounter</div>
                <div className="catch-new-pokemon-press-catch">Press A to catch</div>
                <button 
                    className="DPadVerticalTOP_invisible"
                    onClick={getRandomPokemon}
                ></button>
                <ButtonFunctions 
                    goToHomeScreen={goToHomeScreen}
                    screen={'CatchNewPokemonScreen'}
                />
            </div>
        </>
    )
}

export default CatchNewPokemon;