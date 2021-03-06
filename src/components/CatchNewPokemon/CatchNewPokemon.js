import React from 'react';
import axios from 'axios';
import ButtonFunctions from '../ButtonFunctions'
import PostPokemon from '../APIfunctions/PostPokemon'
import './CatchNewPokemon.css'
import PokeBall from './pokeball-png-icon-free-download-168602.png'

const CatchNewPokemon = ({goToHomeScreen, goToRatePokemonScreenProp, goToPokemonInfoScreenProp}) => {

    const [currentPokemon, setCurrentPokemon] = React.useState({});
    const [currentPokemonIndex, setCurrentPokemonIndex] = React.useState("");
    const [currentPokemonDatabaseId, setCurrentPokemonDatabaseId] = React.useState("");
    const [currentPokemonImage, setCurrentPokemonImage] = React.useState("");
    const [currentPokemonName, setCurrentPokemonName] = React.useState("");
    const [currentScreen, setCurrentScreen] = React.useState("catch");
    const [catching, setCatching] = React.useState(true);


    const getRandomPokemon = async (e) => {
        e.preventDefault();
        const randomNum = Math.floor(Math.random() * 898) + 1

        try {
            const responsePokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/" + randomNum);
            const responsePokemonSpecies = await axios.get("https://pokeapi.co/api/v2/pokemon-species/" + randomNum);
            const responsePokemonRegion = await axios.get("https://pokeapi.co/api/v2/generation/" + responsePokemonSpecies.data.generation.name);
            
            const pokemonName = responsePokemon.data.name[0].toUpperCase() + responsePokemon.data.name.substring(1);

            setCurrentPokemonIndex(responsePokemon.data.id);
            setCurrentPokemonImage(responsePokemon.data.sprites.front_default);
            setCurrentPokemonName(pokemonName);

            const newPokemon = {
                name: pokemonName,
                type: responsePokemon.data.types.map(type => type.type.name[0].toUpperCase() + type.type.name.substring(1)).join(", "),
                generation: responsePokemonRegion.data.main_region.name[0].toUpperCase() + responsePokemonRegion.data.main_region.name.substring(1),
                price: 0,
                rating: 1,
                trainer: null
            }

            setCurrentPokemon(newPokemon);
        }
        catch (err) {
            console.log(err)
        }

    }


    const catchPokemon = async () => {
        if (currentPokemon.name) {
            const result = await PostPokemon(JSON.stringify(currentPokemon));
            console.log("ID: ", result[result.length-1].id)
            setCurrentPokemonDatabaseId(result[result.length-1].id);
            setCurrentPokemonImage("");
            setCurrentPokemonName("");
            setCurrentPokemon({});
            setCurrentScreen("caught");

            setTimeout(() => {
                setCatching(false);
            }, 3000)
        }
    }


    const whichScreen = () => {
        if (currentScreen === "catch") {
            return catchScreen();
        }
        return caughtScreen();
    }


    const catchScreen = () => {
        return (
            <>
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
                <div className="catch-new-pokemon-press-random">Press ??? for new encounter</div>
                <div>-</div>
                <div className="catch-new-pokemon-press-catch">Press A to catch</div>
                <button 
                    className="DPadVerticalTOP_invisible"
                    onClick={getRandomPokemon}
                ></button>
                <button 
                    className="yesButton-invisible"
                    onClick={catchPokemon}
                ></button>
            </>
        )
    }


    const caughtScreen = () => {
        localStorage.setItem("pokedex_id", currentPokemonIndex);
        localStorage.setItem("database_id", currentPokemonDatabaseId);
        if (catching) {
            return (
                <>
                    <div className="catch-new-pokemon-caught-message"></div>
                    <div className="catch-new-pokemon-caught-stars"></div>
                    <img className="catch-new-pokemon-ball pokeball-shake" src={PokeBall}/>
                </>
            )
        }
        return (
            <>
                <div className="catch-new-pokemon-caught-message">Gotcha!</div>
                <div className="catch-new-pokemon-caught-stars">
                    <span>???</span><span>???</span><span>???</span>
                </div>
                <img 
                    className="catch-new-pokemon-ball" 
                    src={PokeBall}
                />
                <label className="catch-new-pokemon-left-command">
                    <span className="left-arrow">???</span> To Rate Pokemon</label>
                <label className="catch-new-pokemon-right-command">
                    <span className="right-arrow">???</span> To See Pokedex Info </label>
                <button 
                    className="DPadHorizontalLEFT_invisible" 
                    onClick={goToRatePokemonScreenProp}
                ></button>
                <button 
                    className="DPadHorizontalRIGHT_invisible" 
                    onClick={goToPokemonInfoScreenProp}
                ></button>
            </>
        )
    }


    return (
        <>
            <div className="catch-new-pokemon-container">
                <div className="catch-new-pokemon-title">Catch Pokemon</div>
                {whichScreen()}
                <ButtonFunctions 
                    goToHomeScreen={goToHomeScreen}
                    screen={'CatchNewPokemonScreen'}
                />
            </div>
        </>
    )
}

export default CatchNewPokemon;