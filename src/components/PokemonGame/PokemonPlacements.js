import React from 'react'
import './PokemonPlacements.css'

const PokemonPlacements = (pokemonInfo) => {


    let image, leftPosition, topPosition;
    if (pokemonInfo.opponent) {
        image = pokemonInfo.front;
        leftPosition = "110px";
        topPosition = "60px";
    }
    else {
        image = pokemonInfo.back;
        leftPosition = "7px";
        topPosition = "110px";
    }

    const pokemonContainer = {
        position: "absolute",
        left: leftPosition,
        top: topPosition
    }

    const pokemonImage = {
        transform: "scale(1.1)",
        filter: "grayscale(100%) brightness(0.8) contrast(175%)"
    }


    return (
        <>
            <div style={pokemonContainer}>
                <img 
                    src={image} 
                    alt=""
                    // className="pokemon-image"
                    style={pokemonImage}
                />
            </div>
        </>
    )
}

export default PokemonPlacements