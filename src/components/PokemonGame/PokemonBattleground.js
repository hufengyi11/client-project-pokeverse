import React from 'react';


const PokemonBattleground = (opponentGround) => {

    let leftPosition, topPosition;
    if (opponentGround) {
        leftPosition = "-5px";
        topPosition = "70px";
    }
    else {
        leftPosition = "0px";
        topPosition = "60px";
    }

    const ovalGround = {
        height: "25px",
        width: "100px",
        backgroundColor: "#181818",
        borderRadius: "50%",
        position: "absolute",
        left: leftPosition,
        top: topPosition,
        zIndex: "0"
    }

    return (
        <>
            <div style={ovalGround}></div>
        </>
    )


}

export default PokemonBattleground;