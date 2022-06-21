import { useEffect, useState } from "react";

import HomeScreen from "./HomeScreen";
import StartUpScreen from "./StartUpScreen";
import DisplayPokemonScreen from "./DisplayPokemonScreen";
import PokemonInfo from "../DisplayPokemon/PokemonInfo";
import SelectPokemon from "../DisplayPokemon/SelectPokemon";


const ScreenSelector = () => {

    const [screen,setScreen] = useState('StartUp');

    

    

    useEffect(()=>{
        setTimeout(()=>{
           
            setScreen('Home')
        },4000)

    },[])

    const handleButtonClick = (screenName) => setScreen(screenName);

    const screens = {

        StartUpScreen: 
            <StartUpScreen />,
        HomeScreen : 
            <HomeScreen 
                goToDisplayPokemonScreen_FromHomeScreen={()=> handleButtonClick('SelectPokemon')}
            />,
        SelectPokemonScreen: 
            <SelectPokemon 
                goToHomeScreen_FromSelectPokemonScreen={()=> handleButtonClick('Home')}
            />
        
    }


    return(
        <>
            {screens[`${screen}Screen`]}           
        </>
    )
}

export default ScreenSelector;