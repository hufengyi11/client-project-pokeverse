import React from 'react'
import './PokemonPlacements.css'

const PokemonPlacements = (pokemonInfo, opponent) => {

    const image = opponent ? pokemonInfo.image_front : pokemonInfo.image_back;

    return (
        <>
            <div className={opponent ? "pokemon-container-opponent" : "pokemon-container-player"}>
                <img 
                    src={image} 
                    alt=""
                    className={opponent ? "pokemon-image-opponent" : "pokemon-image-player"}
                />
            </div>
        </>
    )
}

export default PokemonPlacements