import { useEffect, useState } from "react";

import HomeScreen from "../HomeScreen/HomeScreen";
import StartUpScreen from "./StartUpScreen";
import DisplayPokemonScreen from "./DisplayPokemonScreen";
import PokemonInfo from "../DisplayPokemon/PokemonInfo";
import SelectPokemon from "../DisplayPokemon/SelectPokemon";
import RatePokemonForm from "../RatePokemon/RatePokemonForm";
import FindTrainersScreen from "../FindTrainersScreen/FindTrainersScreen";

const ScreenSelector = () => {

    const [screen, setScreen] = useState('StartUp');


    useEffect(() => {
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
            />

    }


    return (
        <>
            {screens[`${screen}Screen`]}
        </>
    )
}

export default ScreenSelector;