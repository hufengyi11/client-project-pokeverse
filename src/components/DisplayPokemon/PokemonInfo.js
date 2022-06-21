import React, { useEffect, useState } from 'react'
import './PokemonInfo.css'
import ButtonFunctions from '../ButtonFunctions.js'
import axios from 'axios';


const PokemonInfo = ({goToHomeScreen_FromDisplayPokemonScreen}) => {

    const [currentPokemon, setCurrentPokemon] = useState(
            {
                pokemonIndex: "0006",
                pokemonName: "FLETCHINDER",
                pokemonRegion: "KANTO",
                pokemonImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
                pokemonTypeOne: "FIRE",
                pokemonTypeTwo: "FIGHTING",
                pokemonHeight: "1.7",
                pokemonWeight: "200.5",
                pokemonFlavourText: "Under a full moon, this POKéMON likes to mimic the shadows of people and laugh at their fright."
            }
        )

    useEffect(() => {
        getNewPokemon();
    });

    const getNewPokemon = async () => {
        const pokemonSpeciesRes = await axios.get("https://pokeapi.co/api/v2/pokemon-species/94");
        const pokemonRes = await axios.get("https://pokeapi.co/api/v2/pokemon/94");
        const pokemonSpeciesJson = pokemonSpeciesRes.data;
        console.log(pokemonSpeciesJson);
    }
    
    return (
        <section className="pokemon-info-section">
            <div className="pokemon-info-pokemon-index">{currentPokemon.pokemonIndex}</div>
            <div className="pokemon-info-pokemon-name">{currentPokemon.pokemonName}</div>
            <div className="pokemon-info-pokemon-region">{currentPokemon.pokemonRegion}</div>
            <section className="pokemon-info-center">
                <img 
                    src={currentPokemon.pokemonImage} 
                    alt="pokemon image" 
                    className="pokemon-info-image"
                />
                <section className="pokemon-info-type">
                    <div className="pokemon-info-type-1">{currentPokemon.pokemonTypeOne}</div>
                    <div className="pokemon-info-type-2">{currentPokemon.pokemonTypeTwo}</div>
                </section>
            </section>
            <section className="pokemon-info-bottom">
                <section className="pokemon-info-physical-attributes">
                    <div className="pokemon-info-height">{currentPokemon.pokemonHeight}M</div>
                    <div className="pokemon-info-weight">{currentPokemon.pokemonWeight}KG</div>
                </section>
                <section className="pokemon-info-flavour-text">
                    {currentPokemon.pokemonFlavourText}
                </section>
            </section>
            <ButtonFunctions 
                goToHomeScreen_FromDisplayPokemonScreen = {goToHomeScreen_FromDisplayPokemonScreen} 
                screen = {'DisplayPokemonScreen'}
            />
        </section>
    )
}

export default PokemonInfo;
