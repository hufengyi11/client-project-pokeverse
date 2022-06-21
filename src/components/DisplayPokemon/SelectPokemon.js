import React from 'react';
import PokemonInfo from "./PokemonInfo";
import ButtonFunctions from '../ButtonFunctions';
import axios from 'axios';
import './SelectPokemon.css'

const SelectPokemon = ({goToHomeScreen_FromSelectPokemonScreen}) => {

    const [pokemonIndex, setPokemonIndex] = React.useState("");
    const [pokemonName, setPokemonName] = React.useState("");
    const [onSelectScreen, setOnSelectScreen] = React.useState(true);
    const [currentPokemon, setCurrentPokemon] = React.useState({});
    const [foundPokemon, setFoundPokemon] = React.useState(true);

    const pokemonIndexChange = (event) => {
        setPokemonIndex(event.target.value);
        setPokemonName("");
    }

    const pokemonNameChange = (event) => {
        setPokemonName(event.target.value);
        setPokemonIndex("");
    }

    const getSearchBy = () => {
        if (!(pokemonIndex === "")) return pokemonIndex;
        if (!(pokemonName === "")) return pokemonName;
        return "0";
    }

    const findPokemon = async () => {
        const searchBy = getSearchBy();
        // console.log("searchBy: " + searchBy);

        try {
            const responsePokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/" + searchBy)
            const responsePokemonSpecies = await axios.get("https://pokeapi.co/api/v2/pokemon-species/" + searchBy);
            const responsePokemonRegion = await axios.get("https://pokeapi.co/api/v2/generation/" + responsePokemonSpecies.data.generation.name);

            const pokemonData = {
                pokemonIndex: responsePokemon.data.id,
                pokemonName: responsePokemon.data.name.toUpperCase(),
                pokemonRegion: responsePokemonRegion.data.main_region.name.toUpperCase(),
                pokemonImage: responsePokemon.data.sprites.front_default,
                pokemonTypeOne: responsePokemon.data.types[0].type.name.toUpperCase(),
                pokemonTypeTwo: (responsePokemon.data.types.length > 1 ? responsePokemon.data.types[1].type.name : "").toUpperCase(),
                pokemonHeight: responsePokemon.data.height / 10,
                pokemonWeight: responsePokemon.data.weight / 10,
                pokemonFlavourText: responsePokemonSpecies.data.flavor_text_entries[0].flavor_text.replaceAll('\n', " ").replaceAll('\f', " ")
            }
            // console.log(pokemonData);
            setCurrentPokemon(pokemonData);
            setOnSelectScreen(false);
        }
        catch (err) {
            console.log(err);
            setFoundPokemon(false);
            setTimeout(() => {
                setFoundPokemon(true);
            }, 2000)
        }
    }



    const selectScreen = () => {
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
                    {foundPokemon ? null: <div className="select-pokemon-not-found">! NOT FOUND !</div>}
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



    return (
        <>
            {
                onSelectScreen ? 
                selectScreen() : 
                <PokemonInfo 
                    goToHomeScreen_FromSelectPokemonScreen={goToHomeScreen_FromSelectPokemonScreen} 
                    currentPokemon={currentPokemon}
                />
            }
        </>
    )
}

export default SelectPokemon;