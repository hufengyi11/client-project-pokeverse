import React from 'react';
import PokemonInfo from "./PokemonInfo";
import ButtonFunctions from '../ButtonFunctions';
import './SelectPokemon.css'

const SelectPokemon = ({goToHomeScreen_FromSelectPokemonScreen}) => {

    const [pokemonIndex, setPokemonIndex] = React.useState("");
    const [pokemonName, setPokemonName] = React.useState("");

    const pokemonIndexChange = (event) => {
        setPokemonIndex(event.target.value);
        setPokemonName("");
    }

    const pokemonNameChange = (event) => {
        setPokemonName(event.target.value);
        setPokemonIndex("");
    }

    const findPokemon = () => {
        console.log("Clicked Find Pokemon");
    }

    return (
        <>  
            <section className="select-pokemon-container">
                <div className="select-pokemon-title">FIND POKEMON</div>
                <div className="select-pokemon-by-index">BY INDEX:</div>
                <input 
                    type="text" 
                    className="enter-pokemon-index" 
                    value={pokemonIndex} 
                    onChange={pokemonIndexChange}
                />
                <div className="select-pokemon-or">- OR -</div>
                <div className="select-pokemon-by-name">BY NAME:</div>
                <input 
                    type="text" 
                    className="enter-pokemon-name"
                    value={pokemonName} 
                    onChange={pokemonNameChange}
                />
                <text className="select-pokemon-instruction">Press A to search</text>
                <button 
                    className="yesButton-invisible" 
                    onClick={() => {findPokemon()}}
                ></button>
                <ButtonFunctions 
                    goToHomeScreen_FromSelectPokemonScreen={goToHomeScreen_FromSelectPokemonScreen}
                    screen={'SelectPokemonScreen'}
                />
            </section>
        </>
    )
}

export default SelectPokemon;