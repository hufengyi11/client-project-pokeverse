import React, { useState } from 'react';
import ButtonFunctions from '../ButtonFunctions';
import './PokemonGame.css';
import { selectablePokemons } from './SelectablePokemons';

const PokemonGame = ({goToHomeScreen_FromPokemonGameScreen}) => {

    let [screenOption, setScreenOption] = useState(1);
    let [horizontalScreenOption,setHorizontalScreenOption] = useState(1);
    const [selectedTrainer,setSelectedTrainer] = useState("");




    const pressUp = () => {

        setScreenOption(--screenOption)

        if(screenOption<1){

            setScreenOption(4)
        }
        
    }

    const pressDown = () => {

        setScreenOption(++screenOption)

        if(screenOption>4){
            setScreenOption(1)
        }
        
    }

    const pressRight = () => {
        

    }

    const pressLeft = () => {
        
        
    }

    const trainerNames = {
        option1: "Michelle",
        option2: "Naeem",
        option3: "Kieran",
        option4: "Becca"

    }

    const pressYes = (screenOption) => {
        if(horizontalScreenOption===1){
            setSelectedTrainer(trainerNames[`option${screenOption}`])
            setHorizontalScreenOption(2)
            console.log(selectedTrainer)

        }
        

        
    }
    
    const pressNo = () => {
        if(horizontalScreenOption===2){
            setHorizontalScreenOption(1)
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
        option1 : <p className={"pokemonOption"} >Pokemon1</p>,
        option2 : <p className={"pokemonOption"} >Pokemon2</p>,
        option3 : <p className={"pokemonOption"} >Pokemon3</p>,
        option4 : <p className={"pokemonOption"} >Pokemon4</p>
    }
    
    const selectedPokemonOptions = {
        option1 : <p className={"pokemonOptionSelected"} >Pokemon1</p>,
        option2 : <p className={"pokemonOptionSelected"} >Pokemon2</p>,
        option3 : <p className={"pokemonOptionSelected"} >Pokemon3</p>,
        option4 : <p className={"pokemonOptionSelected"} >Pokemon4</p>
    }

    const selectPokemonOption = (screenOption) => {

        pokemonOptions[`option${screenOption}`] = selectedPokemonOptions[`option${screenOption}`] 


    }

    const selectTrainerOption = (screenOption) => {

        trainerOptions[`option${screenOption}`] = selectedTrainerOptions[`option${screenOption}`] 


    }

    const screenOptions = (horizontalScreenOption) => {

        if(horizontalScreenOption===1){
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
                     <p>Trainer! Select Your Pokemon:</p>
                    {pokemonOptions["option1"]}
                    {pokemonOptions["option2"]}
                    {pokemonOptions["option3"]}
                    {pokemonOptions["option4"]}
                
                </>
            )
        }


    }

    return(
        <>
            
            {selectPokemonOption(screenOption)}
            {selectTrainerOption(screenOption)}
            {screenOptions(horizontalScreenOption)}
                
            <progress className="pokemon-game-health-bar" id="health" value="80" max="100"></progress>
            <meter></meter>
            
            <ButtonFunctions dPadLeftGame={()=>{pressLeft()}} 
                            dPadRightGame ={()=>{pressRight()}}
                            dPadUpGame = {()=>{pressUp()}}
                            dPadDownGame = {()=>{pressDown()}}
                            yesButtonGame = {()=>{pressYes(screenOption)}}
                            noButtonGame={() => {pressNo()}}
                            screen={"PokemonGameScreen"}
            />
        </>
    )

    
}


export default PokemonGame;