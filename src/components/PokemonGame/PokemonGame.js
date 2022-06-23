import React, { useState } from 'react';
import ButtonFunctions from '../ButtonFunctions';
import './PokemonGame.css';
import { selectablePokemons } from './SelectablePokemons';
import PokemonBattleStats from './PokemonBattleStats';
import PokemonBattleMessage from './PokemonBattleMessage';
import PokemonPlacements from './PokemonPlacements';
import Snorlax from './snorlaxSleep.jpeg'
import SnorlaxHi from "./snorlaxHi.jpeg"
import PokeBall from "./pokeball.jpeg"
import './battleScreen.css'

const PokemonGame = ({goToHomeScreen_FromPokemonGameScreen}) => {

    

    let [screenOption, setScreenOption] = useState(1);
    let [horizontalScreenOption,setHorizontalScreenOption] = useState(1);
    const [selectedTrainer,setSelectedTrainer] = useState("");
    const [selectedPokemonName, setSelectedPokemonName] = useState("");
    const [computerLoad,setComputerLoad] = useState([])
    const [checkTimeout,setCheckTimeout] = useState(true)
    const [computerChosenParagraph,setComputerChosenParagraph] = useState("")
    const [loadImage, setLoadImage] = useState(<img src={Snorlax} className = "Snorlax"/>)
    const [computerPickNumber,setComputerPickNumber] = useState("")
    const [moveOption,setMoveOption] = useState("")
    const [computersTurn,setComputersTurn] = useState(false)
    const [computerDifficulty,setComputerDifficulty] = useState("Hard")
    const [computerDamageArray,setComputerDamageArray] = useState([])
    let [moveCount,setMoveCount] = useState(0)
   
    
    let isComputersTurn = false;


    // Screen Message State
    const [screenMessage, setScreenMessage] = useState({message: "", display: false});        
        
    // Pokemons currently in play
    const [playerPokemon, setPlayerPokemon] = useState({}); 
    const [opponentPokemon, setOpponentPokemon] = useState({});

    
    const playerDoDamageToOpponent = (moveNumber) => {
        let moveDamage = playerPokemon.moves[moveNumber].damage;
        const affectedPokemon = opponentPokemon;                        
        affectedPokemon['current_health'] -= moveDamage;
        setOpponentPokemon(affectedPokemon);
        triggerMessage("You", playerPokemon.moves[moveNumber].name);
        // setComputersTurn(true);
        isComputersTurn = true;
        setTimeout( ()=>{computerResponse()},3000)


        
        if (affectedPokemon.current_health <= 0) {
            setScreenMessage({message: "YOU WIN!", display: true})
            setTimeout(()=>{
                setHorizontalScreenOption(1)}
            ,2000)
        }

    }

    const pressUp = () => {
        if(horizontalScreenOption === 1){
            setScreenOption(--screenOption)
            if(screenOption<1) setScreenOption(3)
        }
        if(horizontalScreenOption != 5 && horizontalScreenOption!=1){
            setScreenOption(--screenOption)
            if(screenOption<1) setScreenOption(4)
        }
        if(horizontalScreenOption===5 ){
                playerDoDamageToOpponent(0)
        }     
    }

    const pressDown = () => {
        if(horizontalScreenOption === 1){
            setScreenOption(++screenOption)
            if(screenOption>3) setScreenOption(1)
        }
        if(horizontalScreenOption != 5 && horizontalScreenOption!=1){
            setScreenOption(++screenOption)
            if(screenOption>4) setScreenOption(1)
        }
        if(horizontalScreenOption===5 ){
            
                
                playerDoDamageToOpponent(2); 
            
            
        } 
        
    }

    const pressRight = () => {
        if(horizontalScreenOption===5) {

            
                playerDoDamageToOpponent(1);
            
            
        } 
    }

    const pressLeft = () => {
        if(horizontalScreenOption===5 ) {

            
                playerDoDamageToOpponent(3);
            
            
        } 
    }

    
    const trainerNames = {
        option1: "Michelle",
        option2: "Naeem",
        option3: "Kieran",
        option4: "Becca"

    }
    const pokemonNames = {
        option1: "Machamp",
        option2: "Lillipup",
        option3: "Slowking",
        option4: "Meowth"

    }

    const pressYes = (screenOption) => {

        if(horizontalScreenOption===1){
            setComputerDifficulty(difficultyOptionsRaw[`option${screenOption}`])
            setHorizontalScreenOption(2)
        }


        if(horizontalScreenOption===2){
            setSelectedTrainer(trainerNames[`option${screenOption}`])
            setPlayerPokemon(selectablePokemons[screenOption-1])
            setHorizontalScreenOption(3)
            

        }
        if(horizontalScreenOption===3){
            setSelectedPokemonName(pokemonNames[`option${screenOption}`])
            setPlayerPokemon(selectablePokemons[screenOption-1])
            setHorizontalScreenOption(4)
            

        }
        if(horizontalScreenOption===4){
            setSelectedPokemonName(pokemonNames[`option${screenOption}`])
            setPlayerPokemon(selectablePokemons[screenOption-1])
            setHorizontalScreenOption(5)
            

        }
        if(horizontalScreenOption===5){
            console.log()
        }
        

        
    }
    
    const pressNo = () => {
        if(horizontalScreenOption===2){
            setHorizontalScreenOption(1)
        }
        if(horizontalScreenOption===3){
            setHorizontalScreenOption(2)
        }
        if(horizontalScreenOption===4){
            setHorizontalScreenOption(3)
        }
        
        
    }

    const difficultyOptionsRaw = {
        option1: "Easy",
        option2: "Hard",
        option3: "Impossible"

    }

    const difficultyOptions = {
        option1: <p className={"difficultyOption"}>Easy</p>,
        option2: <p className={"difficultyOption"}>Hard</p>,
        option3: <p className={"difficultyOption"}>Impossible</p>
    }

    const selectedDifficultyOptions = {
        option1: <p className={"difficultyOptionSelected"}>Easy</p>,
        option2: <p className={"difficultyOptionSelected"}>Hard</p>,
        option3: <p className={"difficultyOptionSelected"}>Impossible</p>



    }

    const trainerOptions = {
        option1 : <p className={"pokemonOption"} >Michelle</p>,
        option2 : <p className={"pokemonOption"} >Naeem</p>,
        option3 : <p className={"pokemonOption"} >Kieran</p>,
        option4 : <p className={"pokemonOption"} >Becca</p>
    }
    
    const selectedTrainerOptions = {
        option1 : <p className={"pokemonOptionSelected"} >Michelle</p>,
        option2 : <p className={"pokemonOptionSelected"} >Naeem</p>,
        option3 : <p className={"pokemonOptionSelected"} >Kieran</p>,
        option4 : <p className={"pokemonOptionSelected"} >Becca</p>
    }

    const pokemonOptions = {
        option1 : <p className={"pokemonOption"} >Machamp</p>,
        option2 : <p className={"pokemonOption"} >Lillipup</p>,
        option3 : <p className={"pokemonOption"} >Slowking</p>,
        option4 : <p className={"pokemonOption"} >Meowth</p>
    }
    
    const selectedPokemonOptions = {
        option1 :<p className={"pokemonOptionSelected"} >Machamp</p>,
        option2 : <p className={"pokemonOptionSelected"} >Lillipup</p>,
        option3 : <p className={"pokemonOptionSelected"} >Slowking</p>,
        option4 : <p className={"pokemonOptionSelected"} >Meowth</p>
    }

    const selectPokemonOption = (screenOption) => {
        pokemonOptions[`option${screenOption}`] = selectedPokemonOptions[`option${screenOption}`] 
    }

    const selectTrainerOption = (screenOption) => {
        trainerOptions[`option${screenOption}`] = selectedTrainerOptions[`option${screenOption}`] 
    }

    const selectDifficultyOption = (screenOption) => {
        difficultyOptions[`option${screenOption}`] = selectedDifficultyOptions[`option${screenOption}`]

    }

    const computerSelection = ()=> {
        let randomElement = Math.ceil(Math.random() * selectablePokemons.length);

        while(pokemonNames[`option${randomElement}`].toLowerCase()===playerPokemon.name){

            let rand = Math.ceil(Math.random() * selectablePokemons.length);
            if(pokemonNames[`option${rand}`].toLowerCase()===playerPokemon.name){
                continue;
            }else{
                
                let changePoke = selectablePokemons[rand-1];
                changePoke["health"] *= 2
                changePoke["current_health"] *= 2
                if(computerDifficulty==="Hard" || computerDifficulty === "Impossible"){
                    setOpponentPokemon(changePoke)
                }else{
                    
                    setOpponentPokemon(selectablePokemons[rand-1])
                }
                setComputerPickNumber(rand)
                
                




                return selectedPokemonOptions[`option${rand}`]
            }
            
            
        }
        
        let changePoke;
        if (computerDifficulty === "Hard" || computerDifficulty === "Impossible") {
            changePoke = selectablePokemons[randomElement-1];
            changePoke["health"] *= 2
            changePoke["current_health"] *= 2
            setOpponentPokemon(changePoke)
        }else{
            setOpponentPokemon(selectablePokemons[randomElement-1])
        }
        setComputerPickNumber(randomElement)
        

        return selectedPokemonOptions[`option${randomElement}`]
    }
    
    


    const computerChosenTimeout = () => {
        setTimeout(()=>{
            // setLoadImage(<img src={SnorlaxHi} className = "SnorlaxHigh"/>)
            setComputerChosenParagraph(<p>Computer has selected:</p>)
        },4000)
    }

    const computerTimeOut = () => {

        if(checkTimeout){
            setTimeout(() => {
                setComputerLoad(computerSelection());
              }, 4000);
              setCheckTimeout(false)
        }
    }
    

    const returnUserPokeMovesArray = () => {
        const pokeMovesArray = [];
        selectablePokemons[screenOption-1]["moves"].map((move,index)=>{
            pokeMovesArray.push(<p key={index} className="pokemonMoves">{move["name"].toUpperCase()}</p>)
        }) 
        return(pokeMovesArray)
    }




    const screenOptions = (horizontalScreenOption) => {

        if(horizontalScreenOption===1){

            return(
                <>
                <p className="welcomeScreenTitle">Welcome to Pokemon Battle Simulator</p>
                <p className="difficulty">Select your difficulty:</p>
                {difficultyOptions["option1"]}
                {difficultyOptions["option2"]}
                {difficultyOptions["option3"]}
                

                </>
            )

        }

        if(horizontalScreenOption===2){
            selectablePokemons.forEach(pokemon => {
                pokemon.current_health = pokemon.health
            })
            return(
                <>
                    <p>Who do you want to be?</p>
                    {trainerOptions["option1"]}
                    {trainerOptions["option2"]}
                    {trainerOptions["option3"]}
                    {trainerOptions["option4"]}
                   
                </>
            )
        }
        if(horizontalScreenOption===3){
            return(
                <>
                     <p>Trainer! Select Your Pokemon!</p>
                    {pokemonOptions["option1"]}
                    <img src = {selectablePokemons[0]["image_front"]} className="pokemonImages"/> 
                    {pokemonOptions["option2"]}
                    <img src = {selectablePokemons[1]["image_front"]} className="pokemonImages" />
                    {pokemonOptions["option3"]}
                    <img src = {selectablePokemons[2]["image_front"]} className="pokemonImages" />
                    {pokemonOptions["option4"]}
                    <img src = {selectablePokemons[3]["image_front"]} className="pokemonImages" />
                
                </>
            )
        }
        if(horizontalScreenOption===4){
            return(
                <>
                     <p className="computerSelection">Computer is selecting a Pokemon</p>
                     {loadImage}
                     {computerChosenTimeout()}   
                     {computerTimeOut()}
                     {computerChosenParagraph}
                     {computerLoad}
                </>
            )
        }
        if(horizontalScreenOption===5){

            return(
                <>
                    {PokemonBattleStats(opponentPokemon, true)}
                    {PokemonBattleStats(playerPokemon, false)}
                    {PokemonPlacements(opponentPokemon, true)}
                    {PokemonPlacements(playerPokemon, false)}
                    {PokemonBattleMessage(screenMessage.message, screenMessage.display)}
                    {/* <button className="test-trigger-message" onClick={triggerMessage}>Trigger Mes</button> */}
                    <section className="movesContainer">
                        {returnUserPokeMovesArray()}
                    </section>                
                </>
            )
        }
    }

    const computerDamageMapper = () => {
        const damageArray = [];
        opponentPokemon["moves"].map(object=>{damageArray.push(object["damage"])});
        setComputerDamageArray(damageArray);
    }


    const computerResponse = () => {

        console.log(isComputersTurn)

        // if(computersTurn===true && computerDifficulty=== "Easy"){
        if(isComputersTurn===true && computerDifficulty=== "Easy"){

            computerDamageMapper()

            const randomElement = Math.ceil(Math.random() * selectablePokemons.length);
            
            const moveName = opponentPokemon.moves[randomElement-1].name;
            triggerMessage("Opponent", moveName);
            let affectedPokemon = playerPokemon



            while((opponentPokemon["moves"][randomElement-1]['damage']===Math.max.apply(null,computerDamageArray))
                && moveCount%10!=0){
                    let rand = Math.ceil(Math.random() * selectablePokemons.length);
                if(opponentPokemon["moves"][rand-1]['damage']===Math.max.apply(null,computerDamageArray)){
                    continue;
                }
                let computerAttack = opponentPokemon["moves"][rand-1]['damage']
                affectedPokemon["current_health"] -=  computerAttack;
                setPlayerPokemon(affectedPokemon)
                setMoveCount(++moveCount)
                
                
            }

                let computerAttack = opponentPokemon["moves"][randomElement-1]['damage']
                affectedPokemon["current_health"] -=  computerAttack;
                setPlayerPokemon(affectedPokemon)
                setMoveCount(++moveCount)
                // setComputersTurn(false)
                isComputersTurn = false;

                if (affectedPokemon.current_health <= 0) {
                    setScreenMessage({message: "YOU LOSE!", display: true})
                    setTimeout(()=>{
                        setHorizontalScreenOption(1)
                    },2000)
                }
            
            console.log(moveCount)







        }
        
        // if(computersTurn===true && computerDifficulty === "Hard"  ){
        if(isComputersTurn===true && computerDifficulty === "Hard"  ){

            


            
            computerDamageMapper()

            const randomElement = Math.ceil(Math.random() * selectablePokemons.length);
            
            const moveName = opponentPokemon.moves[randomElement-1].name;
            triggerMessage("Opponent", moveName);
            let affectedPokemon = playerPokemon



            while((opponentPokemon["moves"][randomElement-1]['damage']===Math.max.apply(null,computerDamageArray))
                && moveCount%2!=0 && moveCount!=0){
                    let rand = Math.ceil(Math.random() * selectablePokemons.length);
                if(opponentPokemon["moves"][rand-1]['damage']===Math.max.apply(null,computerDamageArray)){
                    continue;
                }
                let computerAttack = (opponentPokemon["moves"][rand-1]['damage']*2)
                affectedPokemon["current_health"] -=  computerAttack;
                setPlayerPokemon(affectedPokemon)
                setMoveCount(++moveCount)
                
                
            }

                let computerAttack = (opponentPokemon["moves"][randomElement-1]['damage']*2)
                affectedPokemon["current_health"] -=  computerAttack;
                setPlayerPokemon(affectedPokemon)
                setMoveCount(++moveCount)
                // setComputersTurn(false)
                isComputersTurn = false;

                if (affectedPokemon.current_health <= 0) {
                    setScreenMessage({message: "YOU LOSE!", display: true})
                    setTimeout(()=>{
                        setHorizontalScreenOption(1)
                    },2000)
                }
            
            console.log(moveCount)
            
        }

        if(isComputersTurn===true && computerDifficulty === "Impossible" ){

            computerDamageMapper()

            const randomElement = Math.ceil(Math.random() * selectablePokemons.length);
            
            const moveName = opponentPokemon.moves[randomElement-1].name;
            triggerMessage("Opponent", moveName);
            let affectedPokemon = playerPokemon



            while((opponentPokemon["moves"][randomElement-1]['damage']===Math.max.apply(null,computerDamageArray))
                && moveCount%2!=0 && moveCount!=0){
                    let rand = Math.ceil(Math.random() * selectablePokemons.length);
                if(opponentPokemon["moves"][rand-1]['damage']===Math.max.apply(null,computerDamageArray)){
                    continue;
                }
                let computerAttack = (opponentPokemon["moves"][rand-1]['damage']*10)
                affectedPokemon["current_health"] -=  computerAttack;
                setPlayerPokemon(affectedPokemon)
                setMoveCount(++moveCount)
                
                
            }

                let computerAttack = (opponentPokemon["moves"][randomElement-1]['damage']*10)
                affectedPokemon["current_health"] -=  computerAttack;
                setPlayerPokemon(affectedPokemon)
                setMoveCount(++moveCount)
                // setComputersTurn(false)
                isComputersTurn = false;

                if (affectedPokemon.current_health <= 0) {
                    setScreenMessage({message: "YOU LOSE...as expected", display: true})
                    setTimeout(()=>{
                        setHorizontalScreenOption(1)
                    },2000)
                }
            
            console.log(moveCount)


        }

    }

    
    const triggerMessage = (who, move) => {
        setScreenMessage({message: `${who} used ${move}!`, display: true})
        setTimeout(() => {
            setScreenMessage({message: "", display: false})
        }, 2000)
    }



    return(
        <>
            <section className="screenContainer">
            {selectPokemonOption(screenOption)}
            {selectTrainerOption(screenOption)}
            {selectDifficultyOption(screenOption)}
            {screenOptions(horizontalScreenOption)}
        

            {/* {PokemonBattleStats(true)}
            {PokemonBattleStats(false)}
            {PokemonBattleground()} */}
            
            <ButtonFunctions dPadLeftGame={()=>{pressLeft()}} 
                            dPadRightGame ={()=>{pressRight()}}
                            dPadUpGame = {()=>{pressUp()}}
                            dPadDownGame = {()=>{pressDown()}}
                            yesButtonGame = {()=>{pressYes(screenOption)}}
                            noButtonGame={() => {pressNo()}}
                            screen={"PokemonGameScreen"}
            />
            </section>
        </>
    )

        
}



export default PokemonGame;