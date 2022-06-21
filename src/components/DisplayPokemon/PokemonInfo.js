import React, { useEffect, useState } from 'react'
import './PokemonInfo.css'
import ButtonFunctions from '../ButtonFunctions.js'
import axios from 'axios';


const PokemonInfo = ({goToHomeScreen_FromSelectPokemonScreen, currentPokemon}) => {


    const howManyTypes = () => {
        if (currentPokemon.pokemonTypeTwo === "") {
            return (
                <div className="pokemon-info-type-1">{currentPokemon.pokemonTypeOne}</div>
            )
        }
        return (
            <>
                <div className="pokemon-info-type-1">{currentPokemon.pokemonTypeOne}</div>
                <div className="pokemon-info-type-2">{currentPokemon.pokemonTypeTwo}</div>
            </>
        )
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
                    {howManyTypes()}
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
                goToHomeScreen_FromSelectPokemonScreen={goToHomeScreen_FromSelectPokemonScreen} 
                screen = {'SelectPokemonScreen'}
            />
        </section>
    )
}

export default PokemonInfo;
