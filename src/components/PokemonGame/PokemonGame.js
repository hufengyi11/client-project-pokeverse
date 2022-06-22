import React, { useState } from 'react';
import ButtonFunctions from '../ButtonFunctions';
import './PokemonGame.css';
import { selectablePokemons } from './SelectablePokemons';


import PokemonBattleStats from './PokemonBattleStats';
import PokemonBattleground from './PokemonBattleground';
import PokemonPlacements from './PokemonPlacements';




const PokemonGame = ({goToHomeScreen_FromPokemonGameScreen}) => {

    let [screenOption, setScreenOption] = useState(1);
    let [horizontalScreenOption,setHorizontalScreenOption] = useState(1);
    const [selectedTrainer,setSelectedTrainer] = useState("");
    const [selectedPokemon, setSelectedPokemon] = useState("");



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
        

        
    }
    
    const pressNo = () => {
        if(horizontalScreenOption===2){
            setHorizontalScreenOption(1)
        }
        if(horizontalScreenOption===3){
            setHorizontalScreenOption(2)
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

        
        
        
        return pokemonNames[`option${randomElement}`]
    }

    const computerSelectionReturn = ()=>{
        
        while(pokemonNames[`option${computerSelection()}`]===selectedPokemon){
            let newNumber = computerSelection();
            if(pokemonNames[`option${computerSelection()}`]!=selectedPokemon){
                return selectedPokemonOptions[`option${newNumber}`]
                
            } 
        }

        

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
                     <p>Computer is selecting a Pokemon...</p>
                     <p>Computer selection:</p>
                     {computerSelection()}
                     
                     
                
                </>
            )
        }


    }


    return(
        <>
            <section className="screenContainer">
            {/* {selectPokemonOption(screenOption)}
            {selectTrainerOption(screenOption)}
            {screenOptions(horizontalScreenOption)} */}
            
            {PokemonBattleStats(selectablePokemons[0], true)}
            {PokemonBattleStats(selectablePokemons[0], false)}
            {PokemonPlacements(selectablePokemons[0], true)}
            {PokemonPlacements(selectablePokemons[0], false)}
            

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