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
import DeletePokemonScreen from "../DeletePokemonScreen/DeletePokemonScreen";
// npm install use-sound
import useSound from 'use-sound';


const ScreenSelector = () => {


    const [screen, setScreen] = useState('StartUp');

    const soundURL = './Pikachu_Sound_Effect.mp3';

    const [play] = useSound(
        soundURL, { volume: 1 }
    )



    useEffect(() => {
        setTimeout(() => {
            setScreen('Home');
            play()
        }, 3000)
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
                goToDeleteTrainersScreen_FromHomeScreen={() => { handleButtonClick('DeleteTrainers') }}
                gotoDeletePokemonScreen_FromHomeScreen={() => { handleButtonClick('DeletePokemon') }}
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
        DeletePokemonScreen:
            <DeletePokemonScreen
                gotoHomeScreen_FromDeletePokemonScreen={() => handleButtonClick('Home')} />


    }


    return (
        <>
            {screens[`${screen}Screen`]}
        </>
    )
}

export default ScreenSelector;