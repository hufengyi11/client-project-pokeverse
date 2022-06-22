import React from 'react';


const PokemonBattleStats = (opponentPokemon) => {
    
    // --- INPUTS
    const currentHealthNumeric = 151;
    const totalHealthNumeric = 200;



    const remainingHealthPercentage = (currentHealthNumeric / totalHealthNumeric) * 100;

    let leftPosition, topPosition;
    if (opponentPokemon) {
        leftPosition = "10px";
        topPosition = "30px";
    }
    else {
        leftPosition = "90px";
        topPosition = "190px";
    }

    const battleStatsContainer = {
        position: "absolute",
        left: leftPosition,
        top: topPosition,
        border: "black",
        borderWidth: "2px",
        borderStyle: "solid",
        padding: "2px",
        borderRadius: "5px",
        height: "42px",
        width: "127px",
        backgroundColor: "transparent",
        zIndex: "900"
    }

    const pokemonName = {
        fontSize: "10px",
        marginBottom: "2px"
    }

    const pokemonBattleStatsHealth = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    const pokemonHealthPointContainer = {
        display: "flex",
        flexDirection: "row"
    }

    const pokemonHealthPointHP = {
        fontSize: "10px",
        width: "20px"
    }

    const healthBarContainer = {
        width: "95px",
        height: "10px",
        backgroundColor: "transparent",
        border: "solid",
        borderColor: "black",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        margin: "0",
        borderRadius: "5px"
    }

    const currentHealth = {
        width: `${remainingHealthPercentage}%`,
        height: "100%",
        backgroundColor: "black"
    }

    const pokemonHealthPointNumeric = {
        marginTop: "3px",
        fontSize: "10px"
    }



    return (
        <>
            <div style={battleStatsContainer}>
                <div style={pokemonName}>PIKACHU</div>
                <div style={pokemonBattleStatsHealth}>
                    <div style={pokemonHealthPointContainer}>
                        <div style={pokemonHealthPointHP}>HP</div>
                        <div style={healthBarContainer}>
                            <div style={currentHealth} ></div>
                        </div>
                    </div>
                    <div style={pokemonHealthPointNumeric}>
                        <span>{currentHealthNumeric}</span>/
                        <span>{totalHealthNumeric}</span>
                    </div>
                </div>
            </div>
        </>
    )   
}

export default PokemonBattleStats;