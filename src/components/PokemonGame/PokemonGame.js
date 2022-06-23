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
    const [selectedPokemon, setSelectedPokemon] = useState("");
    const [computerLoad,setComputerLoad] = useState([])
    const [checkTimeout,setCheckTimeout] = useState(true)
    const [computerChosenParagraph,setComputerChosenParagraph] = useState("")
    const [loadImage, setLoadImage] = useState(<img src={Snorlax} className = "Snorlax"/>)
    const [computerPick,setComputerPick] = useState("")
    const [moveOption,setMoveOption] = useState("")
    


    // Screen Message State
    const [screenMessage, setScreenMessage] = useState({message: "", display: false});        
        
     


    const pressUp = () => {

        if(horizontalScreenOption!=4){

            setScreenOption(--screenOption)

        if(screenOption<1){

            setScreenOption(4)
        }

        }
        

        if(horizontalScreenOption===4){

            setMoveOption(0)
            // console.log("up")
            selectablePokemons[computerPick-1].current_health = selectablePokemons[computerPick-1].current_health - returnMoveDamageArray()[moveOption];
            // console.log(returnMoveDamageArray()[moveOption])
            

        }
        
    }

    const pressDown = () => {

        if(horizontalScreenOption!=4){

            setScreenOption(++screenOption)

        if(screenOption>4){
            setScreenOption(1)
        }

        }

        if(horizontalScreenOption===4){

            setMoveOption(3)
            console.log(returnMoveDamageArray()[moveOption])


        }
        
        
    }

    const pressRight = () => {
        if(horizontalScreenOption===4){

            setMoveOption(1)
            console.log(returnMoveDamageArray()[moveOption])


        }

    }

    const pressLeft = () => {
        
        if(horizontalScreenOption===4){

            setMoveOption(2)
            console.log(returnMoveDamageArray()[moveOption])


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
            setSelectedTrainer(trainerNames[`option${screenOption}`])
            setHorizontalScreenOption(2)
            

        }
        if(horizontalScreenOption===2){
            setSelectedPokemon(pokemonNames[`option${screenOption}`])
            setHorizontalScreenOption(3)
            

        }
        if(horizontalScreenOption===3){
            setSelectedPokemon(pokemonNames[`option${screenOption}`])
            setHorizontalScreenOption(4)
            

        }
        if(horizontalScreenOption===4){
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

    const computerSelection = ()=> {
        const randomElement = Math.ceil(Math.random() * selectablePokemons.length);

        while(pokemonNames[`option${randomElement}`]===selectedPokemon){

            let rand = Math.ceil(Math.random() * selectablePokemons.length);
            if(pokemonNames[`option${rand}`]===selectedPokemon){
                continue;
            }else{
                setComputerPick(rand)
                return selectedPokemonOptions[`option${rand}`]
            }
            
            
        }
        
        setComputerPick(randomElement)
        return selectedPokemonOptions[`option${randomElement}`]
    }
    
    const imageLoadOut = ()=>{
        setTimeout(()=>{
            setLoadImage(<img src={SnorlaxHi} className = "SnorlaxHigh"/>)
            
        },5000)

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

    const moveOptions = {}
    


  

    const returnUserPokeMovesArray = () => {


        const pokeMovesArray = [];


        selectablePokemons[screenOption-1]["moves"].map((move,index)=>{

            
            
            pokeMovesArray.push(<p key={index} className="pokemonMoves">{move["name"].toUpperCase()}</p>)
            
            

        }) 

        

        return(pokeMovesArray)



    }

    const returnComputerPokeMovesArray = () => {


        const pokeMovesArray = [];


        selectablePokemons[computerPick-1]["moves"].map((move,index)=>{

            
            
            pokeMovesArray.push(<p key={index} className="pokemonMoves">{move["name"].toUpperCase()}</p>)
            
            

        }) 

        

        return(pokeMovesArray)



    }



    const returnMoveDamageArray = () => {

        const moveDamageArray = [];
        selectablePokemons[screenOption-1]["moves"].map((move,index)=>{
            moveDamageArray.push(move["damage"]);              
           
        })
        return moveDamageArray;


    }

    

    

    const screenOptions = (horizontalScreenOption) => {

        if(horizontalScreenOption===1){
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
        if(horizontalScreenOption===2){
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
        if(horizontalScreenOption===3){
            return(
                <>
                     <p className="computerSelection">Computer is selecting a Pokemon</p>
                     {loadImage}
                     {computerChosenTimeout()}   
                     {computerTimeOut()}
                     {computerChosenParagraph}
                     {computerLoad}
                     

                     {/* <p>Computer selection:</p>
                     {computerSelection()} */}
                     
                     
                
                </>
            )
        }
        if(horizontalScreenOption===4){

            return(
                <>
                    {PokemonBattleStats(selectablePokemons[computerPick-1], true)}
                    {PokemonBattleStats(selectablePokemons[screenOption-1], false)}
                    {PokemonPlacements(selectablePokemons[computerPick-1], true)}
                    {PokemonPlacements(selectablePokemons[screenOption-1], false)}
                    {battleFlow()}
                    
                    {PokemonBattleMessage(screenMessage.message, screenMessage.display)}
                    <button className="test-trigger-message" onClick={triggerMessage}>Trigger Mes</button>
                    <section className="movesContainer">
                        {/* {returnUserPokeMoves()} */}
                        {returnUserPokeMovesArray()}
                        
                         
                        
                        {/* {console.log(returnUserMoveObject())} */}
                        
                    </section>                
                </>
            )
        }
    }


    const battleFlow = () => {
        
        /*
            
            1. Present main battle screen 
            
            2. User selects a move

            3. Use move damage value to deduct opponent's current health

            4. Check if opponent pokemon is dead
                
                if (opponent dead) leave battleFlow and present win screen
                else carry on battle

            5. Re-render opponent health bar using computer pokemon object

            6. Computer selects a move

            7. Use opponent move damage value to deduct player's current health
            
            8. Check if player pokemon is dead

                if (player dead) leave battleFlow and present lose screen
                else carry on battle

            9. Re-render player health bar using player pokemon object

            10. Back to step 1
            
        */
        
        // if(moveOption===0){
            
        //     let computerHealth = selectablePokemons[computerPick-1].current_health;
        //     computerHealth -= returnMoveDamageArray()[moveOption];
        //     selectablePokemons[computerPick-1].current_health = computerHealth;



        // }
   
        

    }

    
    const triggerMessage = () => {
        setScreenMessage({message: "Opponent used MOVE!", display: true})
        
        setTimeout(() => {
            setScreenMessage({message: "", display: false})
        }, 2000)
    }



    return(
        <>
            <section className="screenContainer">
            {selectPokemonOption(screenOption)}
            {selectTrainerOption(screenOption)}
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