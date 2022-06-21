import { useEffect, useState } from "react";

import HomeScreen from "../HomeScreen/HomeScreen";
import StartUpScreen from "./StartUpScreen";
import DisplayPokemonScreen from "./DisplayPokemonScreen";
import PokemonInfo from "../DisplayPokemon/PokemonInfo";
import SelectPokemon from "../DisplayPokemon/SelectPokemon";
import RatePokemonForm from "../RatePokemon/RatePokemonForm";


const ScreenSelector = () => {

    const [screen,setScreen] = useState('StartUp');

    useEffect(()=>{
        setTimeout(()=>{
            setScreen('Home')
        },4000)
    },[])

    const handleButtonClick = (screenName) => setScreen(screenName);

    const handleDPadClick = () => {
        return(1)
    }

    const screens = {

        StartUpScreen: 
            <StartUpScreen />,
        HomeScreen : 
            <HomeScreen 
                goToDisplayPokemonScreen_FromHomeScreen={()=> handleButtonClick('RatePokemon')}
                goDown_DPad = {()=>handleDPadClick()}
            />,
        SelectPokemonScreen: 
            <SelectPokemon 
                goToHomeScreen_FromSelectPokemonScreen={()=> handleButtonClick('Home')}
            />,
        RatePokemonScreen:
            <RatePokemonForm 
                goToHomeScreen_FromRatePokemonScreen={() => handleButtonClick('Home')}
            />
    }


    return(
        <>
            {screens[`${screen}Screen`]}           
        </>
    )
}

export default ScreenSelector;