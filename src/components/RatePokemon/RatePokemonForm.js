import React from 'react';
import './RatePokemonForm.css';
import PutPokemon from '../APIfunctions/PutPokemon';
import ButtonFunctions from '../ButtonFunctions';
import axios from 'axios';
import GetIdPokemon from '../APIfunctions/GetIdPokemon';

const RatePokemonForm = ({goToHomeScreen_FromRatePokemonScreen, goToFindTrainersScreen_FromRatePokemonScreen}) => {

    const [pokeId, setPokeId] = React.useState("");
    const [pokemonRating, setPokemonRating] = React.useState("");
    const [display, setDisplay] = React.useState(false);
    const [imgUrl, setImgUrl] = React.useState("");
    const [pokemonName, setPokemonName] = React.useState("");
    const [currentRating, setCurrentRating] = React.useState("000");
    const [pokemonType, setPokemonType] = React.useState("");


    const handleSumbit = async () => {

        console.log(pokeId);
        console.log(pokemonName);
        console.log(pokemonType);
        console.log(pokemonRating);

        const result = await PutPokemon(
            pokeId, 
            pokemonName,
            pokemonType,
            pokemonRating
        );

        if (result.status === 200) {
            console.log(result);
        }
        else {
            console.log("FAILED");
        }

        const databaseResult = await GetIdPokemon(pokeId);
        setCurrentRating(databaseResult.rating);
    }


    const changePokeId = (event) => {
        setPokeId(event.target.value);
        getPokemonImage(event.target.value);
    }


    const getPokemonImage = async (value) => {

        let databaseResult;

        try {
            databaseResult = await GetIdPokemon(value);
            // console.log(databaseResult)
            setCurrentRating(databaseResult.rating);
            setPokemonName(databaseResult.name);
            setPokemonType(databaseResult.type);
        }
        catch (err) {
            console.log(err);
        }

        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + databaseResult.name.toLowerCase());
            setImgUrl(response.data.sprites.front_default);
            setDisplay(true);
        }
        catch(err) {
            setDisplay(false);
        }
    }

    
    const returnPokemonImage = () => {
        
        return (
            <img 
                className="rate-pokemon-pokemon-image" 
                src={imgUrl} 
            />
        )
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
                    placeholder="Type to search"
                    onChange={changePokeId}
                />
                <div className="rate-pokemon-pokemon-image-container">
                    {
                        display ? 
                        returnPokemonImage() :
                        <span>NOT FOUND</span>
                    }
                </div>
                <div className="rate-pokemon-current-rating">- {currentRating} -</div>
                <div className="rate-pokemon-poke-rating">New Rating:</div>
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