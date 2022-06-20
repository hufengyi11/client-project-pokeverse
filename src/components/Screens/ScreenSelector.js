import { useEffect, useState } from "react";

import HomeScreen from "./HomeScreen";
import StartUpScreen from "./StartUpScreen";
import DisplayPokemonScreen from "./DisplayPokemonScreen";


const ScreenSelector = () => {

    const [screen,setScreen] = useState('Home');

    const screens = {

        StartUpScreen:{},
        HomeScreen : <HomeScreen goToDisplayPokemonScreen_FromHomeScreen={()=> handleButtonClick('DisplayPokemon')}/> ,
        DisplayPokemonScreen: <DisplayPokemonScreen goToHomeScreen_FromDisplayPokemonScreen={()=>handleButtonClick('Home')}/>,
        
    }

    const handleButtonClick = (screenName) => {

        setScreen(screenName);

    }

    return(
        <>
        {screens[`${screen}Screen`]}           
        </>
    )
}

export default ScreenSelector;