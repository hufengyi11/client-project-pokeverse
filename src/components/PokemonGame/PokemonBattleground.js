import React from 'react';


const PokemonBattleground = (opponentGround) => {

    let leftPosition, topPosition;
    if (opponentGround) {
        leftPosition = "110px";
        topPosition = "120px";
    }
    else {
        leftPosition = "10px";
        topPosition = "170px";
    }

    const ovalGround = {
        height: "25px",
        width: "100px",
        backgroundColor: "#181818",
        borderRadius: "50%",
        position: "absolute",
        left: leftPosition,
        top: topPosition
    }

    return (
        <>
            <div style={ovalGround}></div>
        </>
    )


}

export default PokemonBattleground;