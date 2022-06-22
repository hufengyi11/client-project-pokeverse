import React from 'react'
import PokemonBattleground from './PokemonBattleground';


const PokemonPlacements = (pokemonInfo, opponent) => {


    let image, scale, leftPosition, topPosition;
    if (opponent) {
        image = pokemonInfo.image_front;
        leftPosition = "110px";
        topPosition = "60px";
        scale = "scale(1.1)";
    }
    else {
        image = pokemonInfo.image_back;
        leftPosition = "7px";
        topPosition = "110px";
        scale = "scale(1.2)"
    }

    const pokemonContainer = {
        position: "absolute",
        left: leftPosition,
        top: topPosition
    }

    const pokemonImage = {
        transform: scale,
        filter: "grayscale(100%) brightness(0.8) contrast(175%)",
        zIndex: "9999"
    }


    return (
        <>
            <div style={pokemonContainer}>
                {/* {PokemonBattleground(opponent)} */}
                <img 
                    src={image} 
                    alt=""
                    style={pokemonImage}
                />
            </div>
        </>
    )
}

export default PokemonPlacements