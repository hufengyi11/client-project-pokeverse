import React from 'react';


const PokemonBattleMessage = (message, display) => {

    let topPosition;
    if (display) {
        topPosition = "90px";
    }
    else {
        topPosition = "-900px";
    }

    const pokemonBattleMessageContainer = {
        position: "absolute",
        top: topPosition,
        width: "180px",
        height: "70px",
        backgroundColor: "rgb(63, 111, 81)",
        border: "black",
        borderStyle: "dashed",
        zIndex: "9999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const pokemonBattleMessageText = {
        fontSize: "12px",
        lineHeight: "15px"
    }

    return (
        <>
            <div style={pokemonBattleMessageContainer}>
                <div style={pokemonBattleMessageText}>{message}</div>
            </div>
        </>
    )

}

export default PokemonBattleMessage;