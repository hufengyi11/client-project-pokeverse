import { useEffect, useState } from "react";

import HomeScreen from "../HomeScreen/HomeScreen";
import StartUpScreen from "./StartUpScreen";
import DisplayPokemonScreen from "./DisplayPokemonScreen";
import PokemonInfo from "../DisplayPokemon/PokemonInfo";
import SelectPokemon from "../DisplayPokemon/SelectPokemon";
import RatePokemonForm from "../RatePokemon/RatePokemonForm";
import FindTrainersScreen from "../FindTrainersScreen/FindTrainersScreen";
import MoveTrainers from "../MoveTrainers/MoveTrainers";
import CatchNewPokemon from "../CatchNewPokemon/CatchNewPokemon";
import AddNewTrainerScreen from "../AddNewTrainer/AddNewTrainer";
import DeleteTrainersScreen from "../DeleteTrainers/DeleteTrainersScreen";
import PokemonGame from "../PokemonGame/PokemonGame";


const ScreenSelector = () => {

    const [screen, setScreen] = useState('StartUp');

    
    var sound = new Audio()

    useEffect(() => {
        localStorage.setItem("database_id", 0);
        localStorage.setItem("pokedex_id", 0);
        setTimeout(() => {
            setScreen('Home')
        }, 1000)
    }, [])

    const handleButtonClick = (screenName) => {
        setScreen(screenName)
        console.log(screenName);
    };

    



    const screens = {

        StartUpScreen:
            <StartUpScreen />,
        HomeScreen:
            <HomeScreen
                goToDisplayPokemonScreen_FromHomeScreen={() => handleButtonClick('SelectPokemon')}
                goToRatePokemonScreen_FromHomeScreen={() => { handleButtonClick('RatePokemon') }}
                goToFindTrainersScreen_FromHomeScreen={() => { handleButtonClick('FindTrainers') }}
                goToMoveTrainersScreen_FromHomeScreen={() => { handleButtonClick('MoveTrainers') }}
                goToCatchNewPokemonScreen_FromHomeScreen={() => { handleButtonClick('CatchNewPokemon') }}
                goToAddATrainer_FromHomeScreen={() => { handleButtonClick('AddNewTrainer') }}
                goToDeleteTrainersScreen_FromHomeScreen = {()=>{handleButtonClick('DeleteTrainers')}}
                
            />,
        SelectPokemonScreen:
            <SelectPokemon
                goToHomeScreen_FromSelectPokemonScreen={() => handleButtonClick('Home')}
            />,
        RatePokemonScreen:
            <RatePokemonForm
                goToHomeScreen_FromRatePokemonScreen={() => handleButtonClick('Home')}
            />,
        FindTrainersScreen:
            <FindTrainersScreen
                goToHomeScreen_FromFindTrainersScreen={() => handleButtonClick('Home')}
            />,
        MoveTrainersScreen:
            <MoveTrainers
                goToHomeScreen_FromMoveTrainersScreen={() => handleButtonClick('Home')}
            />,
        CatchNewPokemonScreen:
            <CatchNewPokemon
                goToHomeScreen={() => handleButtonClick('Home')}
                goToRatePokemonScreenProp={() => handleButtonClick('RatePokemon')}
                goToPokemonInfoScreenProp={() => handleButtonClick('SelectPokemon')}
            />,
        AddNewTrainerScreen:
            <AddNewTrainerScreen
                goToHomeScreen_FromAddNewTrainerScreen={() => handleButtonClick('Home')}
            />,
        DeleteTrainersScreen:
            <DeleteTrainersScreen
                goToHomeScreen_FromDeleteTrainersScreen={() => handleButtonClick('Home')}
            />,
        PokemonGameScreen:
            <PokemonGame 
                goToHomeScreen_FromPokemonGameScreen={() => handleButtonClick('Home')} 
            />
        

    }


    return (
        <>
            {screens[`${screen}Screen`]}
        </>
    )
}

export default ScreenSelector;